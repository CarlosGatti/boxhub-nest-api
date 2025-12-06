import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAppsInput } from './user-create-without-apps.input';

@InputType()
export class UserCreateOrConnectWithoutAppsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutAppsInput, {nullable:false})
    @Type(() => UserCreateWithoutAppsInput)
    create!: UserCreateWithoutAppsInput;
}
