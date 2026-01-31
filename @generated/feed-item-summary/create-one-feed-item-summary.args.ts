import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemSummaryCreateInput } from './feed-item-summary-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFeedItemSummaryArgs {

    @Field(() => FeedItemSummaryCreateInput, {nullable:false})
    @Type(() => FeedItemSummaryCreateInput)
    data!: FeedItemSummaryCreateInput;
}
