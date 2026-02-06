import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventAction } from '../prisma/feed-event-action.enum';
import { UserCreateNestedOneWithoutFeedEventsInput } from '../user/user-create-nested-one-without-feed-events.input';
import { Type } from 'class-transformer';
import { FeedItemCreateNestedOneWithoutEventsInput } from '../feed-item/feed-item-create-nested-one-without-events.input';

@InputType()
export class FeedEventCreateWithoutSourceInput {

    @Field(() => FeedEventAction, {nullable:false})
    action!: keyof typeof FeedEventAction;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutFeedEventsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutFeedEventsInput)
    user!: UserCreateNestedOneWithoutFeedEventsInput;

    @Field(() => FeedItemCreateNestedOneWithoutEventsInput, {nullable:false})
    item!: FeedItemCreateNestedOneWithoutEventsInput;
}
