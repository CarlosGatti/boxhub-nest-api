import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemCreateWithoutSummaryInput } from './feed-item-create-without-summary.input';
import { Type } from 'class-transformer';
import { FeedItemCreateOrConnectWithoutSummaryInput } from './feed-item-create-or-connect-without-summary.input';
import { FeedItemUpsertWithoutSummaryInput } from './feed-item-upsert-without-summary.input';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';
import { FeedItemUpdateToOneWithWhereWithoutSummaryInput } from './feed-item-update-to-one-with-where-without-summary.input';

@InputType()
export class FeedItemUpdateOneRequiredWithoutSummaryNestedInput {

    @Field(() => FeedItemCreateWithoutSummaryInput, {nullable:true})
    @Type(() => FeedItemCreateWithoutSummaryInput)
    create?: FeedItemCreateWithoutSummaryInput;

    @Field(() => FeedItemCreateOrConnectWithoutSummaryInput, {nullable:true})
    @Type(() => FeedItemCreateOrConnectWithoutSummaryInput)
    connectOrCreate?: FeedItemCreateOrConnectWithoutSummaryInput;

    @Field(() => FeedItemUpsertWithoutSummaryInput, {nullable:true})
    @Type(() => FeedItemUpsertWithoutSummaryInput)
    upsert?: FeedItemUpsertWithoutSummaryInput;

    @Field(() => FeedItemWhereUniqueInput, {nullable:true})
    @Type(() => FeedItemWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;

    @Field(() => FeedItemUpdateToOneWithWhereWithoutSummaryInput, {nullable:true})
    @Type(() => FeedItemUpdateToOneWithWhereWithoutSummaryInput)
    update?: FeedItemUpdateToOneWithWhereWithoutSummaryInput;
}
