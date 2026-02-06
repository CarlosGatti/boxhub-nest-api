import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFeedEventsInput } from './user-create-without-feed-events.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFeedEventsInput } from './user-create-or-connect-without-feed-events.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFeedEventsInput {

    @Field(() => UserCreateWithoutFeedEventsInput, {nullable:true})
    @Type(() => UserCreateWithoutFeedEventsInput)
    create?: UserCreateWithoutFeedEventsInput;

    @Field(() => UserCreateOrConnectWithoutFeedEventsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFeedEventsInput)
    connectOrCreate?: UserCreateOrConnectWithoutFeedEventsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
