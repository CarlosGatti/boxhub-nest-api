import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFeedItemStatesInput } from './user-create-without-feed-item-states.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFeedItemStatesInput } from './user-create-or-connect-without-feed-item-states.input';
import { UserUpsertWithoutFeedItemStatesInput } from './user-upsert-without-feed-item-states.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFeedItemStatesInput } from './user-update-to-one-with-where-without-feed-item-states.input';

@InputType()
export class UserUpdateOneRequiredWithoutFeedItemStatesNestedInput {

    @Field(() => UserCreateWithoutFeedItemStatesInput, {nullable:true})
    @Type(() => UserCreateWithoutFeedItemStatesInput)
    create?: UserCreateWithoutFeedItemStatesInput;

    @Field(() => UserCreateOrConnectWithoutFeedItemStatesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFeedItemStatesInput)
    connectOrCreate?: UserCreateOrConnectWithoutFeedItemStatesInput;

    @Field(() => UserUpsertWithoutFeedItemStatesInput, {nullable:true})
    @Type(() => UserUpsertWithoutFeedItemStatesInput)
    upsert?: UserUpsertWithoutFeedItemStatesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFeedItemStatesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFeedItemStatesInput)
    update?: UserUpdateToOneWithWhereWithoutFeedItemStatesInput;
}
