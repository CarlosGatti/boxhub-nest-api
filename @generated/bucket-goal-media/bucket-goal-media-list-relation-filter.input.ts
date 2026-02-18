import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalMediaWhereInput } from './bucket-goal-media-where.input';

@InputType()
export class BucketGoalMediaListRelationFilter {

    @Field(() => BucketGoalMediaWhereInput, {nullable:true})
    every?: BucketGoalMediaWhereInput;

    @Field(() => BucketGoalMediaWhereInput, {nullable:true})
    some?: BucketGoalMediaWhereInput;

    @Field(() => BucketGoalMediaWhereInput, {nullable:true})
    none?: BucketGoalMediaWhereInput;
}
