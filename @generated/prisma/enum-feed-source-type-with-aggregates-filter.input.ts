import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceType } from './feed-source-type.enum';
import { NestedEnumFeedSourceTypeWithAggregatesFilter } from './nested-enum-feed-source-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFeedSourceTypeFilter } from './nested-enum-feed-source-type-filter.input';

@InputType()
export class EnumFeedSourceTypeWithAggregatesFilter {

    @Field(() => FeedSourceType, {nullable:true})
    equals?: keyof typeof FeedSourceType;

    @Field(() => [FeedSourceType], {nullable:true})
    in?: Array<keyof typeof FeedSourceType>;

    @Field(() => [FeedSourceType], {nullable:true})
    notIn?: Array<keyof typeof FeedSourceType>;

    @Field(() => NestedEnumFeedSourceTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFeedSourceTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumFeedSourceTypeFilter, {nullable:true})
    _min?: NestedEnumFeedSourceTypeFilter;

    @Field(() => NestedEnumFeedSourceTypeFilter, {nullable:true})
    _max?: NestedEnumFeedSourceTypeFilter;
}
