import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemWhereInput } from './feed-item-where.input';
import { Type } from 'class-transformer';
import { FeedItemUpdateWithoutSummaryInput } from './feed-item-update-without-summary.input';

@InputType()
export class FeedItemUpdateToOneWithWhereWithoutSummaryInput {

    @Field(() => FeedItemWhereInput, {nullable:true})
    @Type(() => FeedItemWhereInput)
    where?: FeedItemWhereInput;

    @Field(() => FeedItemUpdateWithoutSummaryInput, {nullable:false})
    @Type(() => FeedItemUpdateWithoutSummaryInput)
    data!: FeedItemUpdateWithoutSummaryInput;
}
