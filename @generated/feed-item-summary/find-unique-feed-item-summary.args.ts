import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedItemSummaryWhereUniqueInput } from './feed-item-summary-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueFeedItemSummaryArgs {

    @Field(() => FeedItemSummaryWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemSummaryWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemSummaryWhereUniqueInput, 'id' | 'itemId'>;
}
