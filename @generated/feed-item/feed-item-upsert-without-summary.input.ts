import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemUpdateWithoutSummaryInput } from './feed-item-update-without-summary.input';
import { Type } from 'class-transformer';
import { FeedItemCreateWithoutSummaryInput } from './feed-item-create-without-summary.input';
import { FeedItemWhereInput } from './feed-item-where.input';

@InputType()
export class FeedItemUpsertWithoutSummaryInput {

    @Field(() => FeedItemUpdateWithoutSummaryInput, {nullable:false})
    @Type(() => FeedItemUpdateWithoutSummaryInput)
    update!: FeedItemUpdateWithoutSummaryInput;

    @Field(() => FeedItemCreateWithoutSummaryInput, {nullable:false})
    @Type(() => FeedItemCreateWithoutSummaryInput)
    create!: FeedItemCreateWithoutSummaryInput;

    @Field(() => FeedItemWhereInput, {nullable:true})
    @Type(() => FeedItemWhereInput)
    where?: FeedItemWhereInput;
}
