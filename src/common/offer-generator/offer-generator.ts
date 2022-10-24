import dayjs from 'dayjs';

import { OfferGeneratorInterface } from './offer-generator.interface.js';
import { MockDataType } from '../../types/mock-data.type.js';
import { getRandomItem, getRandomItems, getRandomValue } from '../../utils/random.js';
import { CityType } from '../../types/city-type.enum.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { ConvenienceType } from '../../types/convenience-type.enum.js';

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;
const MIN_PRICE = 100;
const MAX_PRICE = 100000;
const MIN_RATING = 1;
const MAX_RATING = 5;
const MIN_NUMBER_ROOMS = 1;
const MAX_NUMBER_ROOMS = 8;
const MIN_NUMBER_GUESTS = 1;
const MAX_NUMBER_GUESTS = 10;
const MIN_NUMBER_COMMENTS = 0;
const MAX_NUMBER_COMMENTS = 100;

export class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockDataType) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const createdDate = dayjs().subtract(getRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();
    const city = getRandomItem<CityType>(this.mockData.cities as CityType[]);
    const preview = getRandomItem<string>(this.mockData.previews);
    const photos = getRandomItems(this.mockData.images);
    const isPremium = Boolean(getRandomItem([0, 1]));
    const rating = getRandomValue(MIN_RATING, MAX_RATING, 1);
    const type = getRandomItem<OfferType>(this.mockData.types as OfferType[]);
    const numberRooms = getRandomValue(MIN_NUMBER_ROOMS, MAX_NUMBER_ROOMS);
    const numberGuests = getRandomValue(MIN_NUMBER_GUESTS, MAX_NUMBER_GUESTS);
    const price = getRandomValue(MIN_PRICE, MAX_PRICE);
    const convenience = getRandomItems<ConvenienceType>(this.mockData.features as ConvenienceType[]);
    const countComments = getRandomValue(MIN_NUMBER_COMMENTS, MAX_NUMBER_COMMENTS);

    return [
      title, description, createdDate, city, preview, photos, isPremium, rating, type, numberRooms, numberGuests, price, convenience, countComments
    ].join('\t');
  }
}
