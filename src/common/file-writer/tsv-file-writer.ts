import { writeFileSync } from 'fs';

import { FileWriterInterface } from './file-writer.interface';

export class TsvFileWriter implements FileWriterInterface {
  constructor(public readonly filename: string) {}

  write(row: string) {
    writeFileSync(this.filename, row, { encoding: 'utf8' });
  }
}
