import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalType } from './bucket-goal-type.enum';

@InputType()
export class NestedEnumBucketGoalTypeFilter {

    @Field(() => BucketGoalType, {nullable:true})
    equals?: keyof typeof BucketGoalType;

    @Field(() => [BucketGoalType], {nullable:true})
    in?: Array<keyof typeof BucketGoalType>;

    @Field(() => [BucketGoalType], {nullable:true})
    notIn?: Array<keyof typeof BucketGoalType>;

    @Field(() => NestedEnumBucketGoalTypeFilter, {nullable:true})
    not?: NestedEnumBucketGoalTypeFilter;
}
