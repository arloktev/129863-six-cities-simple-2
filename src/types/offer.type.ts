import { CityType } from './city-type.enum.js';
import { OfferType } from './offer-type.enum.js';
import { ConvenienceType } from './convenience-type.enum.js';
import { User } from './user.type.js';
import { PositionType } from './position.type.js';

export type Offer = {
  /** Наименование */
  title: string;
  /** Описание предложения */
  description: string;
  /** Дата публикации предложения */
  createdDate: Date;
  /** Город */
  city: CityType;
  /** Превью изображения */
  preview: string;
  /** Фотографии жилья */
  photos: string[];
  /** Флаг «Премиум» */
  isPremium: boolean;
  /** Рейтинг */
  rating: number;
  /** Тип жилья */
  type: OfferType;
  /** Количество комнат */
  numberRooms: number;
  /** Количество гостей */
  numberGuests: number;
  /** Стоимость аренды */
  price: number;
  /** Удобства */
  convenience: ConvenienceType[];
  /** Автор предложения */
  author: User;
  /** Количество комментариев */
  countComments: number;
  /** Координаты предложения для аренды */
  position: PositionType;
}
