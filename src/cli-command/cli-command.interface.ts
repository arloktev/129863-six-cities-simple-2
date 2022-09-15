export interface CliCommandInterface {
  readonly name: string;
  execute: (...parameters: string[]) => void;
}

export enum Commands {
  Help = '--help',
  Version = '--version',
  Import = '--import',
}

