import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFeedItemStatesInput } from './user-update-without-feed-item-states.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFeedItemStatesInput } from './user-create-without-feed-item-states.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFeedItemStatesInput {

    @Field(() => UserUpdateWithoutFeedItemStatesInput, {nullable:false})
    @Type(() => UserUpdateWithoutFeedItemStatesInput)
    update!: UserUpdateWithoutFeedItemStatesInput;

    @Field(() => UserCreateWithoutFeedItemStatesInput, {nullable:false})
    @Type(() => UserCreateWithoutFeedItemStatesInput)
    create!: UserCreateWithoutFeedItemStatesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
