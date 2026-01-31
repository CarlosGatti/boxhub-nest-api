import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemVisibility } from './feed-item-visibility.enum';

@InputType()
export class NestedEnumFeedItemVisibilityFilter {

    @Field(() => FeedItemVisibility, {nullable:true})
    equals?: keyof typeof FeedItemVisibility;

    @Field(() => [FeedItemVisibility], {nullable:true})
    in?: Array<keyof typeof FeedItemVisibility>;

    @Field(() => [FeedItemVisibility], {nullable:true})
    notIn?: Array<keyof typeof FeedItemVisibility>;

    @Field(() => NestedEnumFeedItemVisibilityFilter, {nullable:true})
    not?: NestedEnumFeedItemVisibilityFilter;
}
