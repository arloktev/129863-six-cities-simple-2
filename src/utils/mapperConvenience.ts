import { ConvenienceType } from '../types/convenience-type.enum.js';

export const mapperConvenience = (value: string): ConvenienceType[] => {
  const values = value.split(';');

  return values.map((item) => ConvenienceType[item as keyof typeof ConvenienceType]);
};
