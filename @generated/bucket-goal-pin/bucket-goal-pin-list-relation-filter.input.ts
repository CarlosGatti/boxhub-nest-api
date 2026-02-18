import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalPinWhereInput } from './bucket-goal-pin-where.input';

@InputType()
export class BucketGoalPinListRelationFilter {

    @Field(() => BucketGoalPinWhereInput, {nullable:true})
    every?: BucketGoalPinWhereInput;

    @Field(() => BucketGoalPinWhereInput, {nullable:true})
    some?: BucketGoalPinWhereInput;

    @Field(() => BucketGoalPinWhereInput, {nullable:true})
    none?: BucketGoalPinWhereInput;
}
