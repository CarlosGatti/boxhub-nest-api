import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardCreateNestedOneWithoutGoalLinksInput } from '../bucket-vision-board/bucket-vision-board-create-nested-one-without-goal-links.input';
import { BucketGoalCreateNestedOneWithoutBucketVisionGoalLinksInput } from '../bucket-goal/bucket-goal-create-nested-one-without-bucket-vision-goal-links.input';

@InputType()
export class BucketVisionGoalLinkCreateInput {

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => BucketVisionBoardCreateNestedOneWithoutGoalLinksInput, {nullable:false})
    board!: BucketVisionBoardCreateNestedOneWithoutGoalLinksInput;

    @Field(() => BucketGoalCreateNestedOneWithoutBucketVisionGoalLinksInput, {nullable:false})
    goal!: BucketGoalCreateNestedOneWithoutBucketVisionGoalLinksInput;
}
