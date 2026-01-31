import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemSummaryCreateWithoutItemInput } from './feed-item-summary-create-without-item.input';
import { Type } from 'class-transformer';
import { FeedItemSummaryCreateOrConnectWithoutItemInput } from './feed-item-summary-create-or-connect-without-item.input';
import { Prisma } from '@prisma/client';
import { FeedItemSummaryWhereUniqueInput } from './feed-item-summary-where-unique.input';

@InputType()
export class FeedItemSummaryCreateNestedOneWithoutItemInput {

    @Field(() => FeedItemSummaryCreateWithoutItemInput, {nullable:true})
    @Type(() => FeedItemSummaryCreateWithoutItemInput)
    create?: FeedItemSummaryCreateWithoutItemInput;

    @Field(() => FeedItemSummaryCreateOrConnectWithoutItemInput, {nullable:true})
    @Type(() => FeedItemSummaryCreateOrConnectWithoutItemInput)
    connectOrCreate?: FeedItemSummaryCreateOrConnectWithoutItemInput;

    @Field(() => FeedItemSummaryWhereUniqueInput, {nullable:true})
    @Type(() => FeedItemSummaryWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedItemSummaryWhereUniqueInput, 'id' | 'itemId'>;
}
