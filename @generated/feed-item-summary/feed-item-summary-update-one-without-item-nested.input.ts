import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemSummaryCreateWithoutItemInput } from './feed-item-summary-create-without-item.input';
import { Type } from 'class-transformer';
import { FeedItemSummaryCreateOrConnectWithoutItemInput } from './feed-item-summary-create-or-connect-without-item.input';
import { FeedItemSummaryUpsertWithoutItemInput } from './feed-item-summary-upsert-without-item.input';
import { FeedItemSummaryWhereInput } from './feed-item-summary-where.input';
import { Prisma } from '@prisma/client';
import { FeedItemSummaryWhereUniqueInput } from './feed-item-summary-where-unique.input';
import { FeedItemSummaryUpdateToOneWithWhereWithoutItemInput } from './feed-item-summary-update-to-one-with-where-without-item.input';

@InputType()
export class FeedItemSummaryUpdateOneWithoutItemNestedInput {

    @Field(() => FeedItemSummaryCreateWithoutItemInput, {nullable:true})
    @Type(() => FeedItemSummaryCreateWithoutItemInput)
    create?: FeedItemSummaryCreateWithoutItemInput;

    @Field(() => FeedItemSummaryCreateOrConnectWithoutItemInput, {nullable:true})
    @Type(() => FeedItemSummaryCreateOrConnectWithoutItemInput)
    connectOrCreate?: FeedItemSummaryCreateOrConnectWithoutItemInput;

    @Field(() => FeedItemSummaryUpsertWithoutItemInput, {nullable:true})
    @Type(() => FeedItemSummaryUpsertWithoutItemInput)
    upsert?: FeedItemSummaryUpsertWithoutItemInput;

    @Field(() => FeedItemSummaryWhereInput, {nullable:true})
    @Type(() => FeedItemSummaryWhereInput)
    disconnect?: FeedItemSummaryWhereInput;

    @Field(() => FeedItemSummaryWhereInput, {nullable:true})
    @Type(() => FeedItemSummaryWhereInput)
    delete?: FeedItemSummaryWhereInput;

    @Field(() => FeedItemSummaryWhereUniqueInput, {nullable:true})
    @Type(() => FeedItemSummaryWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedItemSummaryWhereUniqueInput, 'id' | 'itemId'>;

    @Field(() => FeedItemSummaryUpdateToOneWithWhereWithoutItemInput, {nullable:true})
    @Type(() => FeedItemSummaryUpdateToOneWithWhereWithoutItemInput)
    update?: FeedItemSummaryUpdateToOneWithWhereWithoutItemInput;
}
