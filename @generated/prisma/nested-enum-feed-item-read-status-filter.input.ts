import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemReadStatus } from './feed-item-read-status.enum';

@InputType()
export class NestedEnumFeedItemReadStatusFilter {

    @Field(() => FeedItemReadStatus, {nullable:true})
    equals?: keyof typeof FeedItemReadStatus;

    @Field(() => [FeedItemReadStatus], {nullable:true})
    in?: Array<keyof typeof FeedItemReadStatus>;

    @Field(() => [FeedItemReadStatus], {nullable:true})
    notIn?: Array<keyof typeof FeedItemReadStatus>;

    @Field(() => NestedEnumFeedItemReadStatusFilter, {nullable:true})
    not?: NestedEnumFeedItemReadStatusFilter;
}
