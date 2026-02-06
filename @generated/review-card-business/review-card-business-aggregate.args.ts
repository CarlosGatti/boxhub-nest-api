import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardBusinessWhereInput } from './review-card-business-where.input';
import { Type } from 'class-transformer';
import { ReviewCardBusinessOrderByWithRelationInput } from './review-card-business-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReviewCardBusinessWhereUniqueInput } from './review-card-business-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardBusinessCountAggregateInput } from './review-card-business-count-aggregate.input';
import { ReviewCardBusinessAvgAggregateInput } from './review-card-business-avg-aggregate.input';
import { ReviewCardBusinessSumAggregateInput } from './review-card-business-sum-aggregate.input';
import { ReviewCardBusinessMinAggregateInput } from './review-card-business-min-aggregate.input';
import { ReviewCardBusinessMaxAggregateInput } from './review-card-business-max-aggregate.input';

@ArgsType()
export class ReviewCardBusinessAggregateArgs {

    @Field(() => ReviewCardBusinessWhereInput, {nullable:true})
    @Type(() => ReviewCardBusinessWhereInput)
    where?: ReviewCardBusinessWhereInput;

    @Field(() => [ReviewCardBusinessOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewCardBusinessOrderByWithRelationInput>;

    @Field(() => ReviewCardBusinessWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewCardBusinessWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewCardBusinessCountAggregateInput, {nullable:true})
    _count?: ReviewCardBusinessCountAggregateInput;

    @Field(() => ReviewCardBusinessAvgAggregateInput, {nullable:true})
    _avg?: ReviewCardBusinessAvgAggregateInput;

    @Field(() => ReviewCardBusinessSumAggregateInput, {nullable:true})
    _sum?: ReviewCardBusinessSumAggregateInput;

    @Field(() => ReviewCardBusinessMinAggregateInput, {nullable:true})
    _min?: ReviewCardBusinessMinAggregateInput;

    @Field(() => ReviewCardBusinessMaxAggregateInput, {nullable:true})
    _max?: ReviewCardBusinessMaxAggregateInput;
}
