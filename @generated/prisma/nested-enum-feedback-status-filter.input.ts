import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackStatus } from './feedback-status.enum';

@InputType()
export class NestedEnumFeedbackStatusFilter {

    @Field(() => FeedbackStatus, {nullable:true})
    equals?: keyof typeof FeedbackStatus;

    @Field(() => [FeedbackStatus], {nullable:true})
    in?: Array<keyof typeof FeedbackStatus>;

    @Field(() => [FeedbackStatus], {nullable:true})
    notIn?: Array<keyof typeof FeedbackStatus>;

    @Field(() => NestedEnumFeedbackStatusFilter, {nullable:true})
    not?: NestedEnumFeedbackStatusFilter;
}
