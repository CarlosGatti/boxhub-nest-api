import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalStatus } from './bucket-goal-status.enum';

@InputType()
export class NestedEnumBucketGoalStatusFilter {

    @Field(() => BucketGoalStatus, {nullable:true})
    equals?: keyof typeof BucketGoalStatus;

    @Field(() => [BucketGoalStatus], {nullable:true})
    in?: Array<keyof typeof BucketGoalStatus>;

    @Field(() => [BucketGoalStatus], {nullable:true})
    notIn?: Array<keyof typeof BucketGoalStatus>;

    @Field(() => NestedEnumBucketGoalStatusFilter, {nullable:true})
    not?: NestedEnumBucketGoalStatusFilter;
}
