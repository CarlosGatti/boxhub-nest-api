import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalLogWhereInput } from './bucket-goal-log-where.input';

@InputType()
export class BucketGoalLogListRelationFilter {

    @Field(() => BucketGoalLogWhereInput, {nullable:true})
    every?: BucketGoalLogWhereInput;

    @Field(() => BucketGoalLogWhereInput, {nullable:true})
    some?: BucketGoalLogWhereInput;

    @Field(() => BucketGoalLogWhereInput, {nullable:true})
    none?: BucketGoalLogWhereInput;
}
