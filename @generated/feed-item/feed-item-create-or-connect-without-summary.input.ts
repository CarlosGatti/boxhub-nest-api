import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedItemWhereUniqueInput } from './feed-item-where-unique.input';
import { Type } from 'class-transformer';
import { FeedItemCreateWithoutSummaryInput } from './feed-item-create-without-summary.input';

@InputType()
export class FeedItemCreateOrConnectWithoutSummaryInput {

    @Field(() => FeedItemWhereUniqueInput, {nullable:false})
    @Type(() => FeedItemWhereUniqueInput)
    where!: Prisma.AtLeast<FeedItemWhereUniqueInput, 'id' | 'contentHash'>;

    @Field(() => FeedItemCreateWithoutSummaryInput, {nullable:false})
    @Type(() => FeedItemCreateWithoutSummaryInput)
    create!: FeedItemCreateWithoutSummaryInput;
}
