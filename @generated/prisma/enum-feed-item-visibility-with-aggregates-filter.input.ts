import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemVisibility } from './feed-item-visibility.enum';
import { NestedEnumFeedItemVisibilityWithAggregatesFilter } from './nested-enum-feed-item-visibility-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFeedItemVisibilityFilter } from './nested-enum-feed-item-visibility-filter.input';

@InputType()
export class EnumFeedItemVisibilityWithAggregatesFilter {

    @Field(() => FeedItemVisibility, {nullable:true})
    equals?: keyof typeof FeedItemVisibility;

    @Field(() => [FeedItemVisibility], {nullable:true})
    in?: Array<keyof typeof FeedItemVisibility>;

    @Field(() => [FeedItemVisibility], {nullable:true})
    notIn?: Array<keyof typeof FeedItemVisibility>;

    @Field(() => NestedEnumFeedItemVisibilityWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFeedItemVisibilityWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumFeedItemVisibilityFilter, {nullable:true})
    _min?: NestedEnumFeedItemVisibilityFilter;

    @Field(() => NestedEnumFeedItemVisibilityFilter, {nullable:true})
    _max?: NestedEnumFeedItemVisibilityFilter;
}
