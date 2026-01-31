import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemVisibility } from './feed-item-visibility.enum';
import { NestedEnumFeedItemVisibilityFilter } from './nested-enum-feed-item-visibility-filter.input';

@InputType()
export class EnumFeedItemVisibilityFilter {

    @Field(() => FeedItemVisibility, {nullable:true})
    equals?: keyof typeof FeedItemVisibility;

    @Field(() => [FeedItemVisibility], {nullable:true})
    in?: Array<keyof typeof FeedItemVisibility>;

    @Field(() => [FeedItemVisibility], {nullable:true})
    notIn?: Array<keyof typeof FeedItemVisibility>;

    @Field(() => NestedEnumFeedItemVisibilityFilter, {nullable:true})
    not?: NestedEnumFeedItemVisibilityFilter;
}
