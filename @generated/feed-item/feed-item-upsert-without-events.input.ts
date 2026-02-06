import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemUpdateWithoutEventsInput } from './feed-item-update-without-events.input';
import { Type } from 'class-transformer';
import { FeedItemCreateWithoutEventsInput } from './feed-item-create-without-events.input';
import { FeedItemWhereInput } from './feed-item-where.input';

@InputType()
export class FeedItemUpsertWithoutEventsInput {

    @Field(() => FeedItemUpdateWithoutEventsInput, {nullable:false})
    @Type(() => FeedItemUpdateWithoutEventsInput)
    update!: FeedItemUpdateWithoutEventsInput;

    @Field(() => FeedItemCreateWithoutEventsInput, {nullable:false})
    @Type(() => FeedItemCreateWithoutEventsInput)
    create!: FeedItemCreateWithoutEventsInput;

    @Field(() => FeedItemWhereInput, {nullable:true})
    @Type(() => FeedItemWhereInput)
    where?: FeedItemWhereInput;
}
