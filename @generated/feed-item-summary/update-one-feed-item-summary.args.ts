import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemSummaryUpdateInput } from './feed-item-summary-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FeedItemSummaryWhereUniqueInput } from './feed-item-summary-where-unique.input';

@ArgsType()
export class UpdateOneFeedItemSummaryArgs {

    @Field(() => FeedItemSummaryUpdateInput, {nullable:false})
    @Type(() => FeedItemSummaryUpdateInput)
    data!: FeedItemSummaryUpdateInput;

    @Field(() => FeedItemSummaryWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemSummaryWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemSummaryWhereUniqueInput, 'id' | 'itemId'>;
}
