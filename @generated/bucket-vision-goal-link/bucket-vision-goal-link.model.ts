import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BucketVisionBoard } from '../bucket-vision-board/bucket-vision-board.model';
import { BucketGoal } from '../bucket-goal/bucket-goal.model';

@ObjectType()
export class BucketVisionGoalLink {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    boardId!: number;

    @Field(() => Int, {nullable:false})
    goalId!: number;

    @Field(() => String, {nullable:true})
    label!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => BucketVisionBoard, {nullable:false})
    board?: BucketVisionBoard;

    @Field(() => BucketGoal, {nullable:false})
    goal?: BucketGoal;
}
