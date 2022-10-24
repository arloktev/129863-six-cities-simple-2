import { CliCommandInterface, CommandType } from './cli-command.interface.js';
import { TSVFileReader } from '../common/file-reader/tsv-file-reader.js';
import chalk from 'chalk';

/**
 * Импортирует в базу данных информацию из tsv-файла
 */
export class ImportCommand implements CliCommandInterface {
  public readonly name: CommandType = CommandType.Import;

  public execute(filename: string): void {
    const fileReader = new TSVFileReader(filename);

    try {
      fileReader.read();
      console.log(fileReader.toArray());
    } catch (error) {
      console.log(chalk.red((error as Error).message));
    }
  }
}
