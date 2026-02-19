import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionGoalLinkWhereUniqueInput } from './bucket-vision-goal-link-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionGoalLinkUpdateWithoutBoardInput } from './bucket-vision-goal-link-update-without-board.input';
import { BucketVisionGoalLinkCreateWithoutBoardInput } from './bucket-vision-goal-link-create-without-board.input';

@InputType()
export class BucketVisionGoalLinkUpsertWithWhereUniqueWithoutBoardInput {

    @Field(() => BucketVisionGoalLinkWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionGoalLinkWhereUniqueInput, 'id' | 'boardId_goalId'>;

    @Field(() => BucketVisionGoalLinkUpdateWithoutBoardInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkUpdateWithoutBoardInput)
    update!: BucketVisionGoalLinkUpdateWithoutBoardInput;

    @Field(() => BucketVisionGoalLinkCreateWithoutBoardInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkCreateWithoutBoardInput)
    create!: BucketVisionGoalLinkCreateWithoutBoardInput;
}
