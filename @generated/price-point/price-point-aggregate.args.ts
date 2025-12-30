import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PricePointWhereInput } from './price-point-where.input';
import { Type } from 'class-transformer';
import { PricePointOrderByWithRelationInput } from './price-point-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PricePointWhereUniqueInput } from './price-point-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PricePointCountAggregateInput } from './price-point-count-aggregate.input';
import { PricePointAvgAggregateInput } from './price-point-avg-aggregate.input';
import { PricePointSumAggregateInput } from './price-point-sum-aggregate.input';
import { PricePointMinAggregateInput } from './price-point-min-aggregate.input';
import { PricePointMaxAggregateInput } from './price-point-max-aggregate.input';

@ArgsType()
export class PricePointAggregateArgs {

    @Field(() => PricePointWhereInput, {nullable:true})
    @Type(() => PricePointWhereInput)
    where?: PricePointWhereInput;

    @Field(() => [PricePointOrderByWithRelationInput], {nullable:true})
    @Type(() => PricePointOrderByWithRelationInput)
    orderBy?: Array<PricePointOrderByWithRelationInput>;

    @Field(() => PricePointWhereUniqueInput, {nullable:true})
    @Type(() => PricePointWhereUniqueInput)
    cursor?: Prisma.AtLeast<PricePointWhereUniqueInput, 'id' | 'assetId_asOf'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PricePointCountAggregateInput, {nullable:true})
    @Type(() => PricePointCountAggregateInput)
    _count?: PricePointCountAggregateInput;

    @Field(() => PricePointAvgAggregateInput, {nullable:true})
    @Type(() => PricePointAvgAggregateInput)
    _avg?: PricePointAvgAggregateInput;

    @Field(() => PricePointSumAggregateInput, {nullable:true})
    @Type(() => PricePointSumAggregateInput)
    _sum?: PricePointSumAggregateInput;

    @Field(() => PricePointMinAggregateInput, {nullable:true})
    @Type(() => PricePointMinAggregateInput)
    _min?: PricePointMinAggregateInput;

    @Field(() => PricePointMaxAggregateInput, {nullable:true})
    @Type(() => PricePointMaxAggregateInput)
    _max?: PricePointMaxAggregateInput;
}
