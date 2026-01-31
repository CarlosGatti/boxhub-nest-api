import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemSaveStatus } from './feed-item-save-status.enum';

@InputType()
export class NestedEnumFeedItemSaveStatusFilter {

    @Field(() => FeedItemSaveStatus, {nullable:true})
    equals?: keyof typeof FeedItemSaveStatus;

    @Field(() => [FeedItemSaveStatus], {nullable:true})
    in?: Array<keyof typeof FeedItemSaveStatus>;

    @Field(() => [FeedItemSaveStatus], {nullable:true})
    notIn?: Array<keyof typeof FeedItemSaveStatus>;

    @Field(() => NestedEnumFeedItemSaveStatusFilter, {nullable:true})
    not?: NestedEnumFeedItemSaveStatusFilter;
}
