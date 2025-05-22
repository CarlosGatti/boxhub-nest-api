import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutStorageInput } from './user-update-without-storage.input';
import { UserCreateWithoutStorageInput } from './user-create-without-storage.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutStorageInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateWithoutStorageInput, {nullable:false})
    @Type(() => UserUpdateWithoutStorageInput)
    update!: UserUpdateWithoutStorageInput;

    @Field(() => UserCreateWithoutStorageInput, {nullable:false})
    @Type(() => UserCreateWithoutStorageInput)
    create!: UserCreateWithoutStorageInput;
}
