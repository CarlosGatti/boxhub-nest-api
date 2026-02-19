import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BucketVisionGoalLinkBoardIdGoalIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    boardId!: number;

    @Field(() => Int, {nullable:false})
    goalId!: number;
}
