import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemCreateWithoutSummaryInput } from './feed-item-create-without-summary.input';
import { Type } from 'class-transformer';
import { FeedItemCreateOrConnectWithoutSummaryInput } from './feed-item-create-or-connect-without-summary.input';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';

@InputType()
export class FeedItemCreateNestedOneWithoutSummaryInput {

    @Field(() => FeedItemCreateWithoutSummaryInput, {nullable:true})
    @Type(() => FeedItemCreateWithoutSummaryInput)
    create?: FeedItemCreateWithoutSummaryInput;

    @Field(() => FeedItemCreateOrConnectWithoutSummaryInput, {nullable:true})
    @Type(() => FeedItemCreateOrConnectWithoutSummaryInput)
    connectOrCreate?: FeedItemCreateOrConnectWithoutSummaryInput;

    @Field(() => FeedItemWhereUniqueInput, {nullable:true})
    @Type(() => FeedItemWhereUniqueInput)
    connect?: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;
}
