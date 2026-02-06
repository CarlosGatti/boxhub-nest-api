import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemLastAction } from './feed-item-last-action.enum';
import { NestedEnumFeedItemLastActionNullableWithAggregatesFilter } from './nested-enum-feed-item-last-action-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumFeedItemLastActionNullableFilter } from './nested-enum-feed-item-last-action-nullable-filter.input';

@InputType()
export class EnumFeedItemLastActionNullableWithAggregatesFilter {

    @Field(() => FeedItemLastAction, {nullable:true})
    equals?: keyof typeof FeedItemLastAction;

    @Field(() => [FeedItemLastAction], {nullable:true})
    in?: Array<keyof typeof FeedItemLastAction>;

    @Field(() => [FeedItemLastAction], {nullable:true})
    notIn?: Array<keyof typeof FeedItemLastAction>;

    @Field(() => NestedEnumFeedItemLastActionNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFeedItemLastActionNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumFeedItemLastActionNullableFilter, {nullable:true})
    _min?: NestedEnumFeedItemLastActionNullableFilter;

    @Field(() => NestedEnumFeedItemLastActionNullableFilter, {nullable:true})
    _max?: NestedEnumFeedItemLastActionNullableFilter;
}
