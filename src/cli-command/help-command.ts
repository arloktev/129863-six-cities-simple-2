import chalk from 'chalk';

import { CliCommandInterface, CommandType } from './cli-command.interface.js';

const HELP_TEXT = `
  Программа для подготовки данных для REST API сервера.
    Пример:
      main.js --<command> [--arguments]
    Команды:
      ${CommandType.Version}:                   # выводит номер версии
      ${CommandType.Help}:                      # печатает этот текст
      ${CommandType.Import} <path>:             # импортирует данные из TSV
      ${CommandType.Generate} <n> <path> <url>  # генерирует произвольное количество тестовых данных
`;

/**
 * Выводит список и описание всех поддерживаемых аргументов
 */
export class HelpCommand implements CliCommandInterface {
  public readonly name: CommandType = CommandType.Help;

  public execute(): void {
    console.log(chalk.blue(HELP_TEXT));
  }
}
