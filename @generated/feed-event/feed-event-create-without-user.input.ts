import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventAction } from '../prisma/feed-event-action.enum';
import { FeedItemCreateNestedOneWithoutEventsInput } from '../feed-item/feed-item-create-nested-one-without-events.input';
import { FeedSourceCreateNestedOneWithoutEventsInput } from '../feed-source/feed-source-create-nested-one-without-events.input';

@InputType()
export class FeedEventCreateWithoutUserInput {

    @Field(() => FeedEventAction, {nullable:false})
    action!: keyof typeof FeedEventAction;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => FeedItemCreateNestedOneWithoutEventsInput, {nullable:false})
    item!: FeedItemCreateNestedOneWithoutEventsInput;

    @Field(() => FeedSourceCreateNestedOneWithoutEventsInput, {nullable:false})
    source!: FeedSourceCreateNestedOneWithoutEventsInput;
}
