import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFeedEventsInput } from './user-create-without-feed-events.input';

@InputType()
export class UserCreateOrConnectWithoutFeedEventsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutFeedEventsInput, {nullable:false})
    @Type(() => UserCreateWithoutFeedEventsInput)
    create!: UserCreateWithoutFeedEventsInput;
}
