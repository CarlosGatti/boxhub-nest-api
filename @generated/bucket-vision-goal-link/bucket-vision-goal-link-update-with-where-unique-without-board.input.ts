import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionGoalLinkWhereUniqueInput } from './bucket-vision-goal-link-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionGoalLinkUpdateWithoutBoardInput } from './bucket-vision-goal-link-update-without-board.input';

@InputType()
export class BucketVisionGoalLinkUpdateWithWhereUniqueWithoutBoardInput {

    @Field(() => BucketVisionGoalLinkWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionGoalLinkWhereUniqueInput, 'id' | 'boardId_goalId'>;

    @Field(() => BucketVisionGoalLinkUpdateWithoutBoardInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkUpdateWithoutBoardInput)
    data!: BucketVisionGoalLinkUpdateWithoutBoardInput;
}
