import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedItemSummaryWhereUniqueInput } from './feed-item-summary-where-unique.input';
import { Type } from 'class-transformer';
import { FeedItemSummaryCreateInput } from './feed-item-summary-create.input';
import { FeedItemSummaryUpdateInput } from './feed-item-summary-update.input';

@ArgsType()
export class UpsertOneFeedItemSummaryArgs {

    @Field(() => FeedItemSummaryWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemSummaryWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemSummaryWhereUniqueInput, 'id' | 'itemId'>;

    @Field(() => FeedItemSummaryCreateInput, {nullable:false})
    @Type(() => FeedItemSummaryCreateInput)
    create!: FeedItemSummaryCreateInput;

    @Field(() => FeedItemSummaryUpdateInput, {nullable:false})
    @Type(() => FeedItemSummaryUpdateInput)
    update!: FeedItemSummaryUpdateInput;
}
