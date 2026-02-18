import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalStatus } from './bucket-goal-status.enum';
import { NestedEnumBucketGoalStatusWithAggregatesFilter } from './nested-enum-bucket-goal-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBucketGoalStatusFilter } from './nested-enum-bucket-goal-status-filter.input';

@InputType()
export class EnumBucketGoalStatusWithAggregatesFilter {

    @Field(() => BucketGoalStatus, {nullable:true})
    equals?: keyof typeof BucketGoalStatus;

    @Field(() => [BucketGoalStatus], {nullable:true})
    in?: Array<keyof typeof BucketGoalStatus>;

    @Field(() => [BucketGoalStatus], {nullable:true})
    notIn?: Array<keyof typeof BucketGoalStatus>;

    @Field(() => NestedEnumBucketGoalStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBucketGoalStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBucketGoalStatusFilter, {nullable:true})
    _min?: NestedEnumBucketGoalStatusFilter;

    @Field(() => NestedEnumBucketGoalStatusFilter, {nullable:true})
    _max?: NestedEnumBucketGoalStatusFilter;
}
