import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionGoalLinkWhereUniqueInput } from './bucket-vision-goal-link-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionGoalLinkCreateWithoutGoalInput } from './bucket-vision-goal-link-create-without-goal.input';

@InputType()
export class BucketVisionGoalLinkCreateOrConnectWithoutGoalInput {

    @Field(() => BucketVisionGoalLinkWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionGoalLinkWhereUniqueInput, 'id' | 'boardId_goalId'>;

    @Field(() => BucketVisionGoalLinkCreateWithoutGoalInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkCreateWithoutGoalInput)
    create!: BucketVisionGoalLinkCreateWithoutGoalInput;
}
