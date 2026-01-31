import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeedbackStatus } from './feedback-status.enum';
import { NestedEnumFeedbackStatusWithAggregatesFilter } from './nested-enum-feedback-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumFeedbackStatusFilter } from './nested-enum-feedback-status-filter.input';

@InputType()
export class EnumFeedbackStatusWithAggregatesFilter {

    @Field(() => FeedbackStatus, {nullable:true})
    equals?: keyof typeof FeedbackStatus;

    @Field(() => [FeedbackStatus], {nullable:true})
    in?: Array<keyof typeof FeedbackStatus>;

    @Field(() => [FeedbackStatus], {nullable:true})
    notIn?: Array<keyof typeof FeedbackStatus>;

    @Field(() => NestedEnumFeedbackStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumFeedbackStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumFeedbackStatusFilter, {nullable:true})
    _min?: NestedEnumFeedbackStatusFilter;

    @Field(() => NestedEnumFeedbackStatusFilter, {nullable:true})
    _max?: NestedEnumFeedbackStatusFilter;
}
