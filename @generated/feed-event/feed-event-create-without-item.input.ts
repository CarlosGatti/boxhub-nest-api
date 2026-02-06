import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventAction } from '../prisma/feed-event-action.enum';
import { UserCreateNestedOneWithoutFeedEventsInput } from '../user/user-create-nested-one-without-feed-events.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateNestedOneWithoutEventsInput } from '../feed-source/feed-source-create-nested-one-without-events.input';

@InputType()
export class FeedEventCreateWithoutItemInput {

    @Field(() => FeedEventAction, {nullable:false})
    action!: keyof typeof FeedEventAction;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutFeedEventsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutFeedEventsInput)
    user!: UserCreateNestedOneWithoutFeedEventsInput;

    @Field(() => FeedSourceCreateNestedOneWithoutEventsInput, {nullable:false})
    source!: FeedSourceCreateNestedOneWithoutEventsInput;
}
