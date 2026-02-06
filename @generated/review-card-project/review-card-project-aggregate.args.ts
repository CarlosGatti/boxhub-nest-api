import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardProjectWhereInput } from './review-card-project-where.input';
import { Type } from 'class-transformer';
import { ReviewCardProjectOrderByWithRelationInput } from './review-card-project-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReviewCardProjectWhereUniqueInput } from './review-card-project-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardProjectCountAggregateInput } from './review-card-project-count-aggregate.input';
import { ReviewCardProjectAvgAggregateInput } from './review-card-project-avg-aggregate.input';
import { ReviewCardProjectSumAggregateInput } from './review-card-project-sum-aggregate.input';
import { ReviewCardProjectMinAggregateInput } from './review-card-project-min-aggregate.input';
import { ReviewCardProjectMaxAggregateInput } from './review-card-project-max-aggregate.input';

@ArgsType()
export class ReviewCardProjectAggregateArgs {

    @Field(() => ReviewCardProjectWhereInput, {nullable:true})
    @Type(() => ReviewCardProjectWhereInput)
    where?: ReviewCardProjectWhereInput;

    @Field(() => [ReviewCardProjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewCardProjectOrderByWithRelationInput>;

    @Field(() => ReviewCardProjectWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewCardProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewCardProjectCountAggregateInput, {nullable:true})
    _count?: ReviewCardProjectCountAggregateInput;

    @Field(() => ReviewCardProjectAvgAggregateInput, {nullable:true})
    _avg?: ReviewCardProjectAvgAggregateInput;

    @Field(() => ReviewCardProjectSumAggregateInput, {nullable:true})
    _sum?: ReviewCardProjectSumAggregateInput;

    @Field(() => ReviewCardProjectMinAggregateInput, {nullable:true})
    _min?: ReviewCardProjectMinAggregateInput;

    @Field(() => ReviewCardProjectMaxAggregateInput, {nullable:true})
    _max?: ReviewCardProjectMaxAggregateInput;
}
