import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardCreateNestedOneWithoutGoalLinksInput } from '../bucket-vision-board/bucket-vision-board-create-nested-one-without-goal-links.input';

@InputType()
export class BucketVisionGoalLinkCreateWithoutGoalInput {

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => BucketVisionBoardCreateNestedOneWithoutGoalLinksInput, {nullable:false})
    board!: BucketVisionBoardCreateNestedOneWithoutGoalLinksInput;
}
