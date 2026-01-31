import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemSaveStatus } from './feed-item-save-status.enum';
import { NestedEnumFeedItemSaveStatusWithAggregatesFilter } from './nested-enum-feed-item-save-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFeedItemSaveStatusFilter } from './nested-enum-feed-item-save-status-filter.input';

@InputType()
export class EnumFeedItemSaveStatusWithAggregatesFilter {

    @Field(() => FeedItemSaveStatus, {nullable:true})
    equals?: keyof typeof FeedItemSaveStatus;

    @Field(() => [FeedItemSaveStatus], {nullable:true})
    in?: Array<keyof typeof FeedItemSaveStatus>;

    @Field(() => [FeedItemSaveStatus], {nullable:true})
    notIn?: Array<keyof typeof FeedItemSaveStatus>;

    @Field(() => NestedEnumFeedItemSaveStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFeedItemSaveStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumFeedItemSaveStatusFilter, {nullable:true})
    _min?: NestedEnumFeedItemSaveStatusFilter;

    @Field(() => NestedEnumFeedItemSaveStatusFilter, {nullable:true})
    _max?: NestedEnumFeedItemSaveStatusFilter;
}
