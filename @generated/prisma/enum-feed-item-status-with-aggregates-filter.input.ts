import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemStatus } from './feed-item-status.enum';
import { NestedEnumFeedItemStatusWithAggregatesFilter } from './nested-enum-feed-item-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFeedItemStatusFilter } from './nested-enum-feed-item-status-filter.input';

@InputType()
export class EnumFeedItemStatusWithAggregatesFilter {

    @Field(() => FeedItemStatus, {nullable:true})
    equals?: keyof typeof FeedItemStatus;

    @Field(() => [FeedItemStatus], {nullable:true})
    in?: Array<keyof typeof FeedItemStatus>;

    @Field(() => [FeedItemStatus], {nullable:true})
    notIn?: Array<keyof typeof FeedItemStatus>;

    @Field(() => NestedEnumFeedItemStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFeedItemStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumFeedItemStatusFilter, {nullable:true})
    _min?: NestedEnumFeedItemStatusFilter;

    @Field(() => NestedEnumFeedItemStatusFilter, {nullable:true})
    _max?: NestedEnumFeedItemStatusFilter;
}
