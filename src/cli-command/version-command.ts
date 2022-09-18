import chalk from 'chalk';
import { readFileSync } from 'fs';

import { CliCommandInterface, CommandType } from './cli-command.interface.js';

/**
 * Выводит информацию о версии приложения
 */
export class VersionCommand implements CliCommandInterface {
  public readonly name: CommandType = CommandType.Version;

  private static readVersion(): string {
    const contentPackageJSON = readFileSync('./package.json', { encoding: 'utf8' });
    const content = JSON.parse(contentPackageJSON);

    return content.version;
  }

  public execute() {
    const version = VersionCommand.readVersion();

    console.log(chalk.blue(version));
  }
}
