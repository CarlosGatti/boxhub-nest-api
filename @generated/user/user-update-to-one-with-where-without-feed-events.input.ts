import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFeedEventsInput } from './user-update-without-feed-events.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFeedEventsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFeedEventsInput, {nullable:false})
    @Type(() => UserUpdateWithoutFeedEventsInput)
    data!: UserUpdateWithoutFeedEventsInput;
}
