import { User, UserType } from '../types/user.type.js';

export const mapperAuthor = (value: string): User => {
  const [name, email, avatar, password, type] = value.split(';');

  return {
    name,
    email,
    avatar,
    password,
    type: UserType[type as keyof typeof UserType]
  };
};
