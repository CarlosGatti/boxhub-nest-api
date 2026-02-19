import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionGoalLinkWhereInput } from './bucket-vision-goal-link-where.input';
import { Type } from 'class-transformer';
import { BucketVisionGoalLinkOrderByWithRelationInput } from './bucket-vision-goal-link-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BucketVisionGoalLinkWhereUniqueInput } from './bucket-vision-goal-link-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BucketVisionGoalLinkScalarFieldEnum } from './bucket-vision-goal-link-scalar-field.enum';

@ArgsType()
export class FindFirstBucketVisionGoalLinkArgs {

    @Field(() => BucketVisionGoalLinkWhereInput, {nullable:true})
    @Type(() => BucketVisionGoalLinkWhereInput)
    where?: BucketVisionGoalLinkWhereInput;

    @Field(() => [BucketVisionGoalLinkOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BucketVisionGoalLinkOrderByWithRelationInput>;

    @Field(() => BucketVisionGoalLinkWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BucketVisionGoalLinkWhereUniqueInput, 'id' | 'boardId_goalId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BucketVisionGoalLinkScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BucketVisionGoalLinkScalarFieldEnum>;
}
