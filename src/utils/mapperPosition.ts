import { PositionType } from '../types/position.type';

export const mapperPosition = (value: string): PositionType => {
  const [latString, lonString] = value.split(';');

  return [Number(latString), Number(lonString)];
};
