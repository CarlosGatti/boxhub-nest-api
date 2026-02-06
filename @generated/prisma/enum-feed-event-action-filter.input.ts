import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedEventAction } from './feed-event-action.enum';
import { NestedEnumFeedEventActionFilter } from './nested-enum-feed-event-action-filter.input';

@InputType()
export class EnumFeedEventActionFilter {

    @Field(() => FeedEventAction, {nullable:true})
    equals?: keyof typeof FeedEventAction;

    @Field(() => [FeedEventAction], {nullable:true})
    in?: Array<keyof typeof FeedEventAction>;

    @Field(() => [FeedEventAction], {nullable:true})
    notIn?: Array<keyof typeof FeedEventAction>;

    @Field(() => NestedEnumFeedEventActionFilter, {nullable:true})
    not?: NestedEnumFeedEventActionFilter;
}
