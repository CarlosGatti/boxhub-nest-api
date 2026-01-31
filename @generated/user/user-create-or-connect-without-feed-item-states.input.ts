import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFeedItemStatesInput } from './user-create-without-feed-item-states.input';

@InputType()
export class UserCreateOrConnectWithoutFeedItemStatesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutFeedItemStatesInput, {nullable:false})
    @Type(() => UserCreateWithoutFeedItemStatesInput)
    create!: UserCreateWithoutFeedItemStatesInput;
}
