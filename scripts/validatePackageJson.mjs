import chalk from 'chalk';
import { execaSync } from 'execa';
import fs from 'fs-extra';
import path from 'path';
import {
  check as checkPackageFormat,
  format as prettyFormatPackage
} from 'prettier-package-json';

const packagePath = path.resolve(process.cwd(), 'package.json');

function isValidVersion(version) {
  const isValidVersion = /^([0-9]|http|git|(\/|)[a-z-_]+(\/[a-z-_]+)*)/gi.test(
    version
  );
  const isRange = / (-|\|\|) /gi.test(version);
  const hasLooseMatch = /\.x$/gi.test(version);

  return isValidVersion && !isRange && !hasLooseMatch;
}

export async function validatePackageJson(shouldAutoFix) {
  const packageJSON = await fs.readJson(packagePath);
  const { dependencies, devDependencies } = packageJSON;

  const invalidDependencies = Object.keys(dependencies).reduce(
    (acc, dependency) => {
      if (!isValidVersion(dependencies[dependency])) {
        acc.push(`${dependency}@${dependencies[dependency]}`);
      }
      return acc;
    },
    []
  );

  const invalidDevDependencies = Object.keys(devDependencies).reduce(
    (acc, dependency) => {
      if (!isValidVersion(devDependencies[dependency])) {
        acc.push(`${dependency}@${devDependencies[dependency]}`);
      }
      return acc;
    },
    []
  );

  if (invalidDevDependencies.length || invalidDependencies.length) {
    console.log('Dependencies in package.json must be absolute.');
    console.log(
      `The following dependencies are invalid:\n - ${[
        ...invalidDependencies,
        ...invalidDevDependencies
      ].join('\n - ')}`
    );
    throw new Error('Package formatting is invalid!');
  }

  const isValidFormatting = checkPackageFormat(packageJSON);

  if (!isValidFormatting && shouldAutoFix) {
    console.log(chalk.blue('Formatting package.json file...'));
    const appPackage = prettyFormatPackage(packageJSON);
    fs.writeFileSync(packagePath, appPackage, { encoding: 'utf8' });
    execaSync('prettier', ['-u', '-w', '--loglevel=warn', packagePath], {
      cwd: process.cwd(),
      preferLocal: true
    });
  } else if (!isValidFormatting) {
    console.log('Package format is invalid, run with --fix to correct');
    throw new Error('Package formatting is invalid!');
  }
}
