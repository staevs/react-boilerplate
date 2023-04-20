import chalk from 'chalk';
import { execa } from 'execa';
import path from 'path';

const tscArgs = [
  '--pretty',
  '--project',
  path.join(process.cwd(), 'tsconfig.json')
];

export async function runTsc() {
  return execa('tsc', tscArgs, {
    cwd: process.cwd(),
    preferLocal: true
  });
}
