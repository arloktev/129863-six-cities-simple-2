import { readFileSync } from 'fs';

import { FileReaderInterface } from './file-reader.interface.js';
import { Offer } from '../../types/offer.type.js';
import { CityType } from '../../types/city-type.enum.js';
import { mapperPosition } from '../../utils/mapperPosition.js';
import { mapperAuthor } from '../../utils/mapperAuthor.js';
import { mapperConvenience } from '../../utils/mapperConvenience.js';
import { mapperOfferType } from '../../utils/mapperOfferType.js';

export class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public readonly filename: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([title, description, createdDate, city, preview, photos, isPremium, rating, type, numberRooms, numberGuests, price, convenience, author, countComments, position]) => ({
        title,
        description,
        createdDate: new Date(createdDate),
        city: CityType[city as keyof typeof CityType],
        preview,
        photos: photos.split(';'),
        isPremium: Boolean(Number(isPremium)),
        rating: Number(rating),
        type: mapperOfferType(type),
        numberRooms: Number(numberRooms),
        numberGuests: Number(numberGuests),
        price: Number(price),
        convenience: mapperConvenience(convenience),
        author: mapperAuthor(author),
        countComments: Number(countComments),
        position: mapperPosition(position),
      }));
  }
}
