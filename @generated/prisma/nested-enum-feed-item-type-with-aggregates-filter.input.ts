import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemType } from './feed-item-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFeedItemTypeFilter } from './nested-enum-feed-item-type-filter.input';

@InputType()
export class NestedEnumFeedItemTypeWithAggregatesFilter {

    @Field(() => FeedItemType, {nullable:true})
    equals?: keyof typeof FeedItemType;

    @Field(() => [FeedItemType], {nullable:true})
    in?: Array<keyof typeof FeedItemType>;

    @Field(() => [FeedItemType], {nullable:true})
    notIn?: Array<keyof typeof FeedItemType>;

    @Field(() => NestedEnumFeedItemTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFeedItemTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumFeedItemTypeFilter, {nullable:true})
    _min?: NestedEnumFeedItemTypeFilter;

    @Field(() => NestedEnumFeedItemTypeFilter, {nullable:true})
    _max?: NestedEnumFeedItemTypeFilter;
}
