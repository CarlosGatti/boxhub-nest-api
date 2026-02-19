import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionGoalLinkWhereInput } from './bucket-vision-goal-link-where.input';

@InputType()
export class BucketVisionGoalLinkListRelationFilter {

    @Field(() => BucketVisionGoalLinkWhereInput, {nullable:true})
    every?: BucketVisionGoalLinkWhereInput;

    @Field(() => BucketVisionGoalLinkWhereInput, {nullable:true})
    some?: BucketVisionGoalLinkWhereInput;

    @Field(() => BucketVisionGoalLinkWhereInput, {nullable:true})
    none?: BucketVisionGoalLinkWhereInput;
}
