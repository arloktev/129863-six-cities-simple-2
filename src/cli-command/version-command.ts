import { CliCommandInterface, Commands } from './cli-command.interface.js';
import { readFileSync } from 'fs';

export class VersionCommand implements CliCommandInterface {
  public readonly name = Commands.Version;

  private static readVersion(): string {
    const contentPackageJSON = readFileSync('./package.json', { encoding: 'utf8' });
    const content = JSON.parse(contentPackageJSON);

    return content.version;
  }

  public execute() {
    const version = VersionCommand.readVersion();

    console.log(version);
  }
}
