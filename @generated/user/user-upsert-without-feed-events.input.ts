import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFeedEventsInput } from './user-update-without-feed-events.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFeedEventsInput } from './user-create-without-feed-events.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFeedEventsInput {

    @Field(() => UserUpdateWithoutFeedEventsInput, {nullable:false})
    @Type(() => UserUpdateWithoutFeedEventsInput)
    update!: UserUpdateWithoutFeedEventsInput;

    @Field(() => UserCreateWithoutFeedEventsInput, {nullable:false})
    @Type(() => UserCreateWithoutFeedEventsInput)
    create!: UserCreateWithoutFeedEventsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
