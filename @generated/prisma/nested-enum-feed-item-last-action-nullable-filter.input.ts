import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedItemLastAction } from './feed-item-last-action.enum';

@InputType()
export class NestedEnumFeedItemLastActionNullableFilter {

    @Field(() => FeedItemLastAction, {nullable:true})
    equals?: keyof typeof FeedItemLastAction;

    @Field(() => [FeedItemLastAction], {nullable:true})
    in?: Array<keyof typeof FeedItemLastAction>;

    @Field(() => [FeedItemLastAction], {nullable:true})
    notIn?: Array<keyof typeof FeedItemLastAction>;

    @Field(() => NestedEnumFeedItemLastActionNullableFilter, {nullable:true})
    not?: NestedEnumFeedItemLastActionNullableFilter;
}
