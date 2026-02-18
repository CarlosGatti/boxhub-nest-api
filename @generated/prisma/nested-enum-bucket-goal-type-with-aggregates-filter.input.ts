import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalType } from './bucket-goal-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBucketGoalTypeFilter } from './nested-enum-bucket-goal-type-filter.input';

@InputType()
export class NestedEnumBucketGoalTypeWithAggregatesFilter {

    @Field(() => BucketGoalType, {nullable:true})
    equals?: keyof typeof BucketGoalType;

    @Field(() => [BucketGoalType], {nullable:true})
    in?: Array<keyof typeof BucketGoalType>;

    @Field(() => [BucketGoalType], {nullable:true})
    notIn?: Array<keyof typeof BucketGoalType>;

    @Field(() => NestedEnumBucketGoalTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBucketGoalTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBucketGoalTypeFilter, {nullable:true})
    _min?: NestedEnumBucketGoalTypeFilter;

    @Field(() => NestedEnumBucketGoalTypeFilter, {nullable:true})
    _max?: NestedEnumBucketGoalTypeFilter;
}
