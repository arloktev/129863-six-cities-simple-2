import { CliCommandInterface, CommandType } from './cli-command.interface.js';
import got from 'got';
import chalk from 'chalk';
import { MockDataType } from '../types/mock-data.type';
import { TsvFileWriter } from '../common/file-writer/tsv-file-writer.js';
import { OfferGenerator } from '../common/offer-generator/offer-generator.js';

export class GenerateCommand implements CliCommandInterface {
  public readonly name: CommandType = CommandType.Generate;
  private initialData!: MockDataType;

  public async execute(...args: string[]): Promise<void> {
    const [, filepath, url] = args;

    try {
      this.initialData = await got.get(url).json();

      const offerGenerator = new OfferGenerator(this.initialData);
      const tsvFileWriter = new TsvFileWriter(filepath);

      tsvFileWriter.write(offerGenerator.generate());

      console.log(chalk.green(`File ${filepath} was created.`));
    } catch (error) {
      console.error(chalk.red(error));
    }
  }
}
