import { CityType } from './city-type.enum.js';
import { OfferType } from './offer-type.enum.js';
import { ConvenienceType } from './convenience-type.enum.js';
import { User } from './user.type.js';
import { PositionType } from './position.type.js';

export type Offer = {
  title: string;
  description: string;
  createdDate: string;
  city: CityType;
  preview: string;
  photos: string[];
  isPremium: boolean;
  rating: number;
  type: OfferType;
  numberRooms: number;
  numberGuests: number;
  price: number;
  convenience: ConvenienceType[];
  author: User;
  countComments: number;
  position: PositionType;
}
