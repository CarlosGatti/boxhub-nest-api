import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeedItemSummaryCreateManyInput } from './feed-item-summary-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFeedItemSummaryArgs {

    @Field(() => [FeedItemSummaryCreateManyInput], {nullable:false})
    @Type(() => FeedItemSummaryCreateManyInput)
    data!: Array<FeedItemSummaryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
