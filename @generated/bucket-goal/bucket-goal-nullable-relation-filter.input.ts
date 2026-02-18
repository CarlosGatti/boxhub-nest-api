import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalWhereInput } from './bucket-goal-where.input';

@InputType()
export class BucketGoalNullableRelationFilter {

    @Field(() => BucketGoalWhereInput, {nullable:true})
    is?: BucketGoalWhereInput;

    @Field(() => BucketGoalWhereInput, {nullable:true})
    isNot?: BucketGoalWhereInput;
}
