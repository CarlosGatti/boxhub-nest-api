import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemType } from './feed-item-type.enum';
import { NestedEnumFeedItemTypeFilter } from './nested-enum-feed-item-type-filter.input';

@InputType()
export class EnumFeedItemTypeFilter {

    @Field(() => FeedItemType, {nullable:true})
    equals?: keyof typeof FeedItemType;

    @Field(() => [FeedItemType], {nullable:true})
    in?: Array<keyof typeof FeedItemType>;

    @Field(() => [FeedItemType], {nullable:true})
    notIn?: Array<keyof typeof FeedItemType>;

    @Field(() => NestedEnumFeedItemTypeFilter, {nullable:true})
    not?: NestedEnumFeedItemTypeFilter;
}
