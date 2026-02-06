import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceUpdateWithoutEventsInput } from './feed-source-update-without-events.input';
import { Type } from 'class-transformer';
import { FeedSourceCreateWithoutEventsInput } from './feed-source-create-without-events.input';
import { FeedSourceWhereInput } from './feed-source-where.input';

@InputType()
export class FeedSourceUpsertWithoutEventsInput {

    @Field(() => FeedSourceUpdateWithoutEventsInput, {nullable:false})
    @Type(() => FeedSourceUpdateWithoutEventsInput)
    update!: FeedSourceUpdateWithoutEventsInput;

    @Field(() => FeedSourceCreateWithoutEventsInput, {nullable:false})
    @Type(() => FeedSourceCreateWithoutEventsInput)
    create!: FeedSourceCreateWithoutEventsInput;

    @Field(() => FeedSourceWhereInput, {nullable:true})
    @Type(() => FeedSourceWhereInput)
    where?: FeedSourceWhereInput;
}
