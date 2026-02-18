import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalWhereInput } from './bucket-goal-where.input';

@InputType()
export class BucketGoalListRelationFilter {

    @Field(() => BucketGoalWhereInput, {nullable:true})
    every?: BucketGoalWhereInput;

    @Field(() => BucketGoalWhereInput, {nullable:true})
    some?: BucketGoalWhereInput;

    @Field(() => BucketGoalWhereInput, {nullable:true})
    none?: BucketGoalWhereInput;
}
