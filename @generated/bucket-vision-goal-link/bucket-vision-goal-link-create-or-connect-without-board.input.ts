import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionGoalLinkWhereUniqueInput } from './bucket-vision-goal-link-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionGoalLinkCreateWithoutBoardInput } from './bucket-vision-goal-link-create-without-board.input';

@InputType()
export class BucketVisionGoalLinkCreateOrConnectWithoutBoardInput {

    @Field(() => BucketVisionGoalLinkWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionGoalLinkWhereUniqueInput, 'id' | 'boardId_goalId'>;

    @Field(() => BucketVisionGoalLinkCreateWithoutBoardInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkCreateWithoutBoardInput)
    create!: BucketVisionGoalLinkCreateWithoutBoardInput;
}
