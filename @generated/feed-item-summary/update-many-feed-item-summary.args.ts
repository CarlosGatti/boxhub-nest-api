import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemSummaryUpdateManyMutationInput } from './feed-item-summary-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FeedItemSummaryWhereInput } from './feed-item-summary-where.input';

@ArgsType()
export class UpdateManyFeedItemSummaryArgs {

    @Field(() => FeedItemSummaryUpdateManyMutationInput, {nullable:false})
    @Type(() => FeedItemSummaryUpdateManyMutationInput)
    data!: FeedItemSummaryUpdateManyMutationInput;

    @Field(() => FeedItemSummaryWhereInput, {nullable:true})
    @Type(() => FeedItemSummaryWhereInput)
    where?: FeedItemSummaryWhereInput;
}
