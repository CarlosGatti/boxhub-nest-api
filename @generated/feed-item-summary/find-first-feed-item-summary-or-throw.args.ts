import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemSummaryWhereInput } from './feed-item-summary-where.input';
import { Type } from 'class-transformer';
import { FeedItemSummaryOrderByWithRelationInput } from './feed-item-summary-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeedItemSummaryWhereUniqueInput } from './feed-item-summary-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeedItemSummaryScalarFieldEnum } from './feed-item-summary-scalar-field.enum';

@ArgsType()
export class FindFirstFeedItemSummaryOrThrowArgs {

    @Field(() => FeedItemSummaryWhereInput, {nullable:true})
    @Type(() => FeedItemSummaryWhereInput)
    where?: FeedItemSummaryWhereInput;

    @Field(() => [FeedItemSummaryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeedItemSummaryOrderByWithRelationInput>;

    @Field(() => FeedItemSummaryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeedItemSummaryWhereUniqueInput, 'id' | 'itemId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FeedItemSummaryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof FeedItemSummaryScalarFieldEnum>;
}
