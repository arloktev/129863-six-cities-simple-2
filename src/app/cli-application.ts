import { CliCommandInterface, CommandType } from '../cli-command/cli-command.interface.js';

type ParsedCommand = {
  [key: string]: string[];
}

export class CliApplication {
  private commands: { [commandName: string]: CliCommandInterface } = {};
  private defaultCommand = CommandType.Help;

  private parseCommand(argv: string[]): ParsedCommand {
    let command = '';

    return argv.reduce((acc, item) => {
      if (item.startsWith('--')) {
        acc[item] = [];
        command = item;
      } else if (command && item) {
        acc[command].push(item);
      }

      return acc;
    }, {} as ParsedCommand);
  }

  public registerCommands(commands: CliCommandInterface[]): void {
    commands.reduce((acc, command) => {
      acc[command.name] = command;

      return acc;
    }, this.commands);
  }

  public getCommand(commandName: string): CliCommandInterface {
    return this.commands[commandName] ?? this.commands[this.defaultCommand];
  }

  public processCommand(argv: string[]): void {
    const parsedCommands = this.parseCommand(argv);
    const [commandName] = Object.keys(parsedCommands);
    const command = this.getCommand(commandName);
    const commandArgs = parsedCommands[commandName] || [];
    command.execute(...commandArgs);
  }
}
