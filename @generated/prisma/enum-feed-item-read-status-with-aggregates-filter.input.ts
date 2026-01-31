import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemReadStatus } from './feed-item-read-status.enum';
import { NestedEnumFeedItemReadStatusWithAggregatesFilter } from './nested-enum-feed-item-read-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFeedItemReadStatusFilter } from './nested-enum-feed-item-read-status-filter.input';

@InputType()
export class EnumFeedItemReadStatusWithAggregatesFilter {

    @Field(() => FeedItemReadStatus, {nullable:true})
    equals?: keyof typeof FeedItemReadStatus;

    @Field(() => [FeedItemReadStatus], {nullable:true})
    in?: Array<keyof typeof FeedItemReadStatus>;

    @Field(() => [FeedItemReadStatus], {nullable:true})
    notIn?: Array<keyof typeof FeedItemReadStatus>;

    @Field(() => NestedEnumFeedItemReadStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFeedItemReadStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumFeedItemReadStatusFilter, {nullable:true})
    _min?: NestedEnumFeedItemReadStatusFilter;

    @Field(() => NestedEnumFeedItemReadStatusFilter, {nullable:true})
    _max?: NestedEnumFeedItemReadStatusFilter;
}
