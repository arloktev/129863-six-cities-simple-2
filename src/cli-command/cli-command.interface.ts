export enum CommandType {
  Help = '--help',
  Version = '--version',
  Import = '--import',
  Generate = '--generate',
}

export interface CliCommandInterface {
  readonly name: CommandType;
  execute: (...parameters: string[]) => void;
}
