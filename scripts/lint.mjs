import chalk from 'chalk';
import { execaSync } from 'execa';
import { icons } from './helper.mjs';
import { runEslint } from './runEslint.mjs';
import { runTsc } from './runTsc.mjs';
import { validatePackageJson } from './validatePackageJson.mjs';

const shouldAutoFix = process.argv.includes('--fix');
const shouldSkipEslint = process.argv.includes('--skip-eslint');
const shouldSkipTypescript = process.argv.includes('--skip-ts');
const shouldSkipJson = process.argv.includes('--skip-json');

(async function lint() {
  console.log(
    chalk.yellow.bold(
      `${icons.info} Running code quality and formatting checks...\n`
    )
  );
  let success = true;

  try {
    console.log(
      chalk.blue(
        `${icons.bullet} Checking${
          shouldAutoFix ? ' and fixing' : ''
        } package.json file...`
      )
    );
    await validatePackageJson(shouldAutoFix);
    console.log(
      chalk.green(
        `${icons.check} File package.json has been successfully validated!\n`
      )
    );
  } catch (err) {
    success = false;
    console.error(
      chalk.red(
        `${icons.error} File package.json is invalid. See errors above\n`
      )
    );
  }

  try {
    if (shouldSkipEslint) {
      console.log(
        chalk.yellow(`${icons.warning} Skipping eslint rules check\n`)
      );
    } else {
      console.log(
        chalk.blue(
          `${icons.bullet} Checking${
            shouldAutoFix ? ' and fixing' : ''
          } eslint rules...`
        )
      );
      const results = await runEslint(shouldAutoFix);

      if (
        results.some(
          ({ warningCount, fixableWarningCount }) =>
            warningCount > 0 || fixableWarningCount > 0
        )
      ) {
        console.log(
          chalk.yellow(`${icons.warning} Linter success with warnings\n`)
        );
      } else {
        console.log(chalk.green(`${icons.check} Linter success\n`));
      }
    }
  } catch (err) {
    success = false;
    console.error(chalk.red.bold(`${icons.error} ${err.message}\n`));
  }

  try {
    if (shouldSkipTypescript) {
      console.log(chalk.yellow(`${icons.warning} Skipping typescript check\n`));
    } else {
      console.log(chalk.blue(`${icons.bullet} Checking typescript...`));
      await runTsc();
      console.log(chalk.green(`${icons.check} Type checking passes\n`));
    }
  } catch (err) {
    success = false;
    console.log(chalk.bold('Typescript errors'));
    console.log(err.stdout || err.stderr);
    console.error(
      chalk.red.bold(
        `  ${icons.error} Typescript failed due to the above errors\n`
      )
    );
  }

  try {
    if (shouldSkipJson) {
      console.log(
        chalk.yellow(`${icons.warning} Skipping *.json files formatting\n`)
      );
    } else if (shouldAutoFix) {
      console.log(chalk.blue(`${icons.bullet} Formatting *.json files!`));
      execaSync(
        'prettier',
        [
          '-u',
          '-w',
          '--ignore-unknown',
          '--no-error-on-unmatched-pattern',
          '--loglevel=warn',
          '*/**/*.json'
        ],
        {
          cwd: process.cwd(),
          preferLocal: true
        }
      );
      console.log(
        chalk.green(`${icons.check} Formatted *.json files successfully\n`)
      );
    }
  } catch (err) {
    success = false;
    console.log(chalk.bold('Prettier errors'));
    console.log(err.stdout || err.stderr);
    console.error(
      chalk.red.bold(
        `${icons.error} Formatting *.json files failed due to the above errors\n`
      )
    );
  }

  if (success) {
    console.log(chalk.bold.green(`${icons.check} All checks passed\n`));
    process.exit(0);
  } else {
    console.error(
      chalk.red.bold(
        `${icons.error} Code quality checks failed${
          !shouldAutoFix
            ? ', try running with --fix to attempt to automatically fix some issues'
            : ''
        }.\n`
      )
    );
    process.exit(1);
  }
})();
