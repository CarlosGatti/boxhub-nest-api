import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalCreateNestedOneWithoutBucketVisionGoalLinksInput } from '../bucket-goal/bucket-goal-create-nested-one-without-bucket-vision-goal-links.input';

@InputType()
export class BucketVisionGoalLinkCreateWithoutBoardInput {

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => BucketGoalCreateNestedOneWithoutBucketVisionGoalLinksInput, {nullable:false})
    goal!: BucketGoalCreateNestedOneWithoutBucketVisionGoalLinksInput;
}
