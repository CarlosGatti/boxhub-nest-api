import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionGoalLinkWhereUniqueInput } from './bucket-vision-goal-link-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionGoalLinkUpdateWithoutGoalInput } from './bucket-vision-goal-link-update-without-goal.input';

@InputType()
export class BucketVisionGoalLinkUpdateWithWhereUniqueWithoutGoalInput {

    @Field(() => BucketVisionGoalLinkWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionGoalLinkWhereUniqueInput, 'id' | 'boardId_goalId'>;

    @Field(() => BucketVisionGoalLinkUpdateWithoutGoalInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkUpdateWithoutGoalInput)
    data!: BucketVisionGoalLinkUpdateWithoutGoalInput;
}
