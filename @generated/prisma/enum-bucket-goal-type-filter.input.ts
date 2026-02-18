import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalType } from './bucket-goal-type.enum';
import { NestedEnumBucketGoalTypeFilter } from './nested-enum-bucket-goal-type-filter.input';

@InputType()
export class EnumBucketGoalTypeFilter {

    @Field(() => BucketGoalType, {nullable:true})
    equals?: keyof typeof BucketGoalType;

    @Field(() => [BucketGoalType], {nullable:true})
    in?: Array<keyof typeof BucketGoalType>;

    @Field(() => [BucketGoalType], {nullable:true})
    notIn?: Array<keyof typeof BucketGoalType>;

    @Field(() => NestedEnumBucketGoalTypeFilter, {nullable:true})
    not?: NestedEnumBucketGoalTypeFilter;
}
