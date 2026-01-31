import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemSummaryWhereInput } from './feed-item-summary-where.input';
import { Type } from 'class-transformer';
import { FeedItemSummaryUpdateWithoutItemInput } from './feed-item-summary-update-without-item.input';

@InputType()
export class FeedItemSummaryUpdateToOneWithWhereWithoutItemInput {

    @Field(() => FeedItemSummaryWhereInput, {nullable:true})
    @Type(() => FeedItemSummaryWhereInput)
    where?: FeedItemSummaryWhereInput;

    @Field(() => FeedItemSummaryUpdateWithoutItemInput, {nullable:false})
    @Type(() => FeedItemSummaryUpdateWithoutItemInput)
    data!: FeedItemSummaryUpdateWithoutItemInput;
}
