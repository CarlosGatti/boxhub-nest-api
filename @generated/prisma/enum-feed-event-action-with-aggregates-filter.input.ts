import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventAction } from './feed-event-action.enum';
import { NestedEnumFeedEventActionWithAggregatesFilter } from './nested-enum-feed-event-action-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFeedEventActionFilter } from './nested-enum-feed-event-action-filter.input';

@InputType()
export class EnumFeedEventActionWithAggregatesFilter {

    @Field(() => FeedEventAction, {nullable:true})
    equals?: keyof typeof FeedEventAction;

    @Field(() => [FeedEventAction], {nullable:true})
    in?: Array<keyof typeof FeedEventAction>;

    @Field(() => [FeedEventAction], {nullable:true})
    notIn?: Array<keyof typeof FeedEventAction>;

    @Field(() => NestedEnumFeedEventActionWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFeedEventActionWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumFeedEventActionFilter, {nullable:true})
    _min?: NestedEnumFeedEventActionFilter;

    @Field(() => NestedEnumFeedEventActionFilter, {nullable:true})
    _max?: NestedEnumFeedEventActionFilter;
}
