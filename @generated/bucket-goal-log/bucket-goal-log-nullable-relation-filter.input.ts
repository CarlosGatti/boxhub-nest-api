import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalLogWhereInput } from './bucket-goal-log-where.input';

@InputType()
export class BucketGoalLogNullableRelationFilter {

    @Field(() => BucketGoalLogWhereInput, {nullable:true})
    is?: BucketGoalLogWhereInput;

    @Field(() => BucketGoalLogWhereInput, {nullable:true})
    isNot?: BucketGoalLogWhereInput;
}
