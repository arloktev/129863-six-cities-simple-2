import { CliCommandInterface, Commands } from './cli-command.interface.js';

export class ImportCommand implements CliCommandInterface {
  public readonly name = Commands.Import;

  public execute() {
    console.log('execute ImportCommand');
  }
}
