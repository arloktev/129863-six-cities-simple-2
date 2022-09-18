export enum UserType {
  Standard = 'обычный',
  Pro = 'pro',
}

export type User = {
  /** имя */
  name: string;
  /** электронная почта */
  email: string;
  /** аватар */
  avatar?: string;
  /** пароль */
  password: string;
  /** тип пользователя */
  type: UserType;
}
