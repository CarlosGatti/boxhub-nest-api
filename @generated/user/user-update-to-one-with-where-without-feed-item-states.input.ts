import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFeedItemStatesInput } from './user-update-without-feed-item-states.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFeedItemStatesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFeedItemStatesInput, {nullable:false})
    @Type(() => UserUpdateWithoutFeedItemStatesInput)
    data!: UserUpdateWithoutFeedItemStatesInput;
}
