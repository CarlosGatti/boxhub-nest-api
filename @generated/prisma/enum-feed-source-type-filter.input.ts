import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedSourceType } from './feed-source-type.enum';
import { NestedEnumFeedSourceTypeFilter } from './nested-enum-feed-source-type-filter.input';

@InputType()
export class EnumFeedSourceTypeFilter {

    @Field(() => FeedSourceType, {nullable:true})
    equals?: keyof typeof FeedSourceType;

    @Field(() => [FeedSourceType], {nullable:true})
    in?: Array<keyof typeof FeedSourceType>;

    @Field(() => [FeedSourceType], {nullable:true})
    notIn?: Array<keyof typeof FeedSourceType>;

    @Field(() => NestedEnumFeedSourceTypeFilter, {nullable:true})
    not?: NestedEnumFeedSourceTypeFilter;
}
