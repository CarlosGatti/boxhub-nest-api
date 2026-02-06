import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemLastAction } from './feed-item-last-action.enum';
import { NestedEnumFeedItemLastActionNullableFilter } from './nested-enum-feed-item-last-action-nullable-filter.input';

@InputType()
export class EnumFeedItemLastActionNullableFilter {

    @Field(() => FeedItemLastAction, {nullable:true})
    equals?: keyof typeof FeedItemLastAction;

    @Field(() => [FeedItemLastAction], {nullable:true})
    in?: Array<keyof typeof FeedItemLastAction>;

    @Field(() => [FeedItemLastAction], {nullable:true})
    notIn?: Array<keyof typeof FeedItemLastAction>;

    @Field(() => NestedEnumFeedItemLastActionNullableFilter, {nullable:true})
    not?: NestedEnumFeedItemLastActionNullableFilter;
}
