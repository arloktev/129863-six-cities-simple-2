import { defaultClasses, getModelForClass, prop } from '@typegoose/typegoose';

import { User, UserType } from '../../types/user.type.js';

export interface UserEntity extends defaultClasses.Base {}

export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop()
    name!: string;

  @prop({
    unique: true,
    required: true,
  })
    email!: string;

  @prop()
    avatar!: string;

  @prop()
    password!: string;

  @prop()
    type!: UserType;
}

export const UserModel = getModelForClass(UserEntity);
