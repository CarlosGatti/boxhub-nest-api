import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemSaveStatus } from './feed-item-save-status.enum';
import { NestedEnumFeedItemSaveStatusFilter } from './nested-enum-feed-item-save-status-filter.input';

@InputType()
export class EnumFeedItemSaveStatusFilter {

    @Field(() => FeedItemSaveStatus, {nullable:true})
    equals?: keyof typeof FeedItemSaveStatus;

    @Field(() => [FeedItemSaveStatus], {nullable:true})
    in?: Array<keyof typeof FeedItemSaveStatus>;

    @Field(() => [FeedItemSaveStatus], {nullable:true})
    notIn?: Array<keyof typeof FeedItemSaveStatus>;

    @Field(() => NestedEnumFeedItemSaveStatusFilter, {nullable:true})
    not?: NestedEnumFeedItemSaveStatusFilter;
}
