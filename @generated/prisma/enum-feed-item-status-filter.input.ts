import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemStatus } from './feed-item-status.enum';
import { NestedEnumFeedItemStatusFilter } from './nested-enum-feed-item-status-filter.input';

@InputType()
export class EnumFeedItemStatusFilter {

    @Field(() => FeedItemStatus, {nullable:true})
    equals?: keyof typeof FeedItemStatus;

    @Field(() => [FeedItemStatus], {nullable:true})
    in?: Array<keyof typeof FeedItemStatus>;

    @Field(() => [FeedItemStatus], {nullable:true})
    notIn?: Array<keyof typeof FeedItemStatus>;

    @Field(() => NestedEnumFeedItemStatusFilter, {nullable:true})
    not?: NestedEnumFeedItemStatusFilter;
}
