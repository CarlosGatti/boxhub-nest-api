import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFeedEventsInput } from './user-create-without-feed-events.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFeedEventsInput } from './user-create-or-connect-without-feed-events.input';
import { UserUpsertWithoutFeedEventsInput } from './user-upsert-without-feed-events.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFeedEventsInput } from './user-update-to-one-with-where-without-feed-events.input';

@InputType()
export class UserUpdateOneRequiredWithoutFeedEventsNestedInput {

    @Field(() => UserCreateWithoutFeedEventsInput, {nullable:true})
    @Type(() => UserCreateWithoutFeedEventsInput)
    create?: UserCreateWithoutFeedEventsInput;

    @Field(() => UserCreateOrConnectWithoutFeedEventsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFeedEventsInput)
    connectOrCreate?: UserCreateOrConnectWithoutFeedEventsInput;

    @Field(() => UserUpsertWithoutFeedEventsInput, {nullable:true})
    @Type(() => UserUpsertWithoutFeedEventsInput)
    upsert?: UserUpsertWithoutFeedEventsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFeedEventsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFeedEventsInput)
    update?: UserUpdateToOneWithWhereWithoutFeedEventsInput;
}
