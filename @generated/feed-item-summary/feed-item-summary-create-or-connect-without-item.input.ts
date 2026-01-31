import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedItemSummaryWhereUniqueInput } from './feed-item-summary-where-unique.input';
import { Type } from 'class-transformer';
import { FeedItemSummaryCreateWithoutItemInput } from './feed-item-summary-create-without-item.input';

@InputType()
export class FeedItemSummaryCreateOrConnectWithoutItemInput {

    @Field(() => FeedItemSummaryWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemSummaryWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemSummaryWhereUniqueInput, 'id' | 'itemId'>;

    @Field(() => FeedItemSummaryCreateWithoutItemInput, {nullable:false})
    @Type(() => FeedItemSummaryCreateWithoutItemInput)
    create!: FeedItemSummaryCreateWithoutItemInput;
}
