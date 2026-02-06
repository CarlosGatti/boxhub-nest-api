import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewCardPremiumRequestWhereInput } from './review-card-premium-request-where.input';
import { Type } from 'class-transformer';
import { ReviewCardPremiumRequestOrderByWithRelationInput } from './review-card-premium-request-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ReviewCardPremiumRequestWhereUniqueInput } from './review-card-premium-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewCardPremiumRequestCountAggregateInput } from './review-card-premium-request-count-aggregate.input';
import { ReviewCardPremiumRequestAvgAggregateInput } from './review-card-premium-request-avg-aggregate.input';
import { ReviewCardPremiumRequestSumAggregateInput } from './review-card-premium-request-sum-aggregate.input';
import { ReviewCardPremiumRequestMinAggregateInput } from './review-card-premium-request-min-aggregate.input';
import { ReviewCardPremiumRequestMaxAggregateInput } from './review-card-premium-request-max-aggregate.input';

@ArgsType()
export class ReviewCardPremiumRequestAggregateArgs {

    @Field(() => ReviewCardPremiumRequestWhereInput, {nullable:true})
    @Type(() => ReviewCardPremiumRequestWhereInput)
    where?: ReviewCardPremiumRequestWhereInput;

    @Field(() => [ReviewCardPremiumRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewCardPremiumRequestOrderByWithRelationInput>;

    @Field(() => ReviewCardPremiumRequestWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ReviewCardPremiumRequestWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewCardPremiumRequestCountAggregateInput, {nullable:true})
    _count?: ReviewCardPremiumRequestCountAggregateInput;

    @Field(() => ReviewCardPremiumRequestAvgAggregateInput, {nullable:true})
    _avg?: ReviewCardPremiumRequestAvgAggregateInput;

    @Field(() => ReviewCardPremiumRequestSumAggregateInput, {nullable:true})
    _sum?: ReviewCardPremiumRequestSumAggregateInput;

    @Field(() => ReviewCardPremiumRequestMinAggregateInput, {nullable:true})
    _min?: ReviewCardPremiumRequestMinAggregateInput;

    @Field(() => ReviewCardPremiumRequestMaxAggregateInput, {nullable:true})
    _max?: ReviewCardPremiumRequestMaxAggregateInput;
}
