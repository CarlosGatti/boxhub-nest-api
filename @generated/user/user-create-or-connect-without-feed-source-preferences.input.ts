import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFeedSourcePreferencesInput } from './user-create-without-feed-source-preferences.input';

@InputType()
export class UserCreateOrConnectWithoutFeedSourcePreferencesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutFeedSourcePreferencesInput, {nullable:false})
    @Type(() => UserCreateWithoutFeedSourcePreferencesInput)
    create!: UserCreateWithoutFeedSourcePreferencesInput;
}
