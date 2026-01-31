import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemSummaryUpdateWithoutItemInput } from './feed-item-summary-update-without-item.input';
import { Type } from 'class-transformer';
import { FeedItemSummaryCreateWithoutItemInput } from './feed-item-summary-create-without-item.input';
import { FeedItemSummaryWhereInput } from './feed-item-summary-where.input';

@InputType()
export class FeedItemSummaryUpsertWithoutItemInput {

    @Field(() => FeedItemSummaryUpdateWithoutItemInput, {nullable:false})
    @Type(() => FeedItemSummaryUpdateWithoutItemInput)
    update!: FeedItemSummaryUpdateWithoutItemInput;

    @Field(() => FeedItemSummaryCreateWithoutItemInput, {nullable:false})
    @Type(() => FeedItemSummaryCreateWithoutItemInput)
    create!: FeedItemSummaryCreateWithoutItemInput;

    @Field(() => FeedItemSummaryWhereInput, {nullable:true})
    @Type(() => FeedItemSummaryWhereInput)
    where?: FeedItemSummaryWhereInput;
}
