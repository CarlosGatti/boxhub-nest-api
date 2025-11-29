import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RatingWhereInput } from './rating-where.input';
import { Type } from 'class-transformer';
import { RatingOrderByWithRelationInput } from './rating-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RatingWhereUniqueInput } from './rating-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RatingCountAggregateInput } from './rating-count-aggregate.input';
import { RatingAvgAggregateInput } from './rating-avg-aggregate.input';
import { RatingSumAggregateInput } from './rating-sum-aggregate.input';
import { RatingMinAggregateInput } from './rating-min-aggregate.input';
import { RatingMaxAggregateInput } from './rating-max-aggregate.input';

@ArgsType()
export class RatingAggregateArgs {

    @Field(() => RatingWhereInput, {nullable:true})
    @Type(() => RatingWhereInput)
    where?: RatingWhereInput;

    @Field(() => [RatingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RatingOrderByWithRelationInput>;

    @Field(() => RatingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RatingWhereUniqueInput, 'id' | 'sellerId_buyerId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RatingCountAggregateInput, {nullable:true})
    _count?: RatingCountAggregateInput;

    @Field(() => RatingAvgAggregateInput, {nullable:true})
    _avg?: RatingAvgAggregateInput;

    @Field(() => RatingSumAggregateInput, {nullable:true})
    _sum?: RatingSumAggregateInput;

    @Field(() => RatingMinAggregateInput, {nullable:true})
    _min?: RatingMinAggregateInput;

    @Field(() => RatingMaxAggregateInput, {nullable:true})
    _max?: RatingMaxAggregateInput;
}
