import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutStorageInput } from './user-create-without-storage.input';

@InputType()
export class UserCreateOrConnectWithoutStorageInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutStorageInput, {nullable:false})
    @Type(() => UserCreateWithoutStorageInput)
    create!: UserCreateWithoutStorageInput;
}
