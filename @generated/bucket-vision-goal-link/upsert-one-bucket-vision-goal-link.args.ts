import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketVisionGoalLinkWhereUniqueInput } from './bucket-vision-goal-link-where-unique.input';
import { Type } from 'class-transformer';
import { BucketVisionGoalLinkCreateInput } from './bucket-vision-goal-link-create.input';
import { BucketVisionGoalLinkUpdateInput } from './bucket-vision-goal-link-update.input';

@ArgsType()
export class UpsertOneBucketVisionGoalLinkArgs {

    @Field(() => BucketVisionGoalLinkWhereUniqueInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkWhereUniqueInput)
    where!: Prisma.AtLeast<BucketVisionGoalLinkWhereUniqueInput, 'id' | 'boardId_goalId'>;

    @Field(() => BucketVisionGoalLinkCreateInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkCreateInput)
    create!: BucketVisionGoalLinkCreateInput;

    @Field(() => BucketVisionGoalLinkUpdateInput, {nullable:false})
    @Type(() => BucketVisionGoalLinkUpdateInput)
    update!: BucketVisionGoalLinkUpdateInput;
}
