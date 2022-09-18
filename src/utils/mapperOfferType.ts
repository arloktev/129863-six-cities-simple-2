import { OfferType } from '../types/offer-type.enum.js';

export const mapperOfferType = (value: string): OfferType => {
  const correctType = value[0].toUpperCase() + value.slice(1);

  return OfferType[correctType as keyof typeof OfferType];
};
