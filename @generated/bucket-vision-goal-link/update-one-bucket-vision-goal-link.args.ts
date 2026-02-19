import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionGoalLinkUpdateInput } from './bucket-vision-goal-link-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BucketVisionGoalLinkWhereUniqueInput } from './bucket-vision-goal-link-where-unique.input';

@ArgsType()
export class UpdateOneBucketVisionGoalLinkArgs {

    @Field(() => BucketVisionGoalLinkUpdateInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkUpdateInput)
    data!: BucketVisionGoalLinkUpdateInput;

    @Field(() => BucketVisionGoalLinkWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionGoalLinkWhereUniqueInput, 'id' | 'boardId_goalId'>;
}
