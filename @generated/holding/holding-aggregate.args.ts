import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HoldingWhereInput } from './holding-where.input';
import { Type } from 'class-transformer';
import { HoldingOrderByWithRelationInput } from './holding-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HoldingWhereUniqueInput } from './holding-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HoldingCountAggregateInput } from './holding-count-aggregate.input';
import { HoldingAvgAggregateInput } from './holding-avg-aggregate.input';
import { HoldingSumAggregateInput } from './holding-sum-aggregate.input';
import { HoldingMinAggregateInput } from './holding-min-aggregate.input';
import { HoldingMaxAggregateInput } from './holding-max-aggregate.input';

@ArgsType()
export class HoldingAggregateArgs {

    @Field(() => HoldingWhereInput, {nullable:true})
    @Type(() => HoldingWhereInput)
    where?: HoldingWhereInput;

    @Field(() => [HoldingOrderByWithRelationInput], {nullable:true})
    @Type(() => HoldingOrderByWithRelationInput)
    orderBy?: Array<HoldingOrderByWithRelationInput>;

    @Field(() => HoldingWhereUniqueInput, {nullable:true})
    @Type(() => HoldingWhereUniqueInput)
    cursor?: Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HoldingCountAggregateInput, {nullable:true})
    @Type(() => HoldingCountAggregateInput)
    _count?: HoldingCountAggregateInput;

    @Field(() => HoldingAvgAggregateInput, {nullable:true})
    @Type(() => HoldingAvgAggregateInput)
    _avg?: HoldingAvgAggregateInput;

    @Field(() => HoldingSumAggregateInput, {nullable:true})
    @Type(() => HoldingSumAggregateInput)
    _sum?: HoldingSumAggregateInput;

    @Field(() => HoldingMinAggregateInput, {nullable:true})
    @Type(() => HoldingMinAggregateInput)
    _min?: HoldingMinAggregateInput;

    @Field(() => HoldingMaxAggregateInput, {nullable:true})
    @Type(() => HoldingMaxAggregateInput)
    _max?: HoldingMaxAggregateInput;
}
