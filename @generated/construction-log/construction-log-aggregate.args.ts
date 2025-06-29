import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConstructionLogWhereInput } from './construction-log-where.input';
import { Type } from 'class-transformer';
import { ConstructionLogOrderByWithRelationInput } from './construction-log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ConstructionLogWhereUniqueInput } from './construction-log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConstructionLogCountAggregateInput } from './construction-log-count-aggregate.input';
import { ConstructionLogAvgAggregateInput } from './construction-log-avg-aggregate.input';
import { ConstructionLogSumAggregateInput } from './construction-log-sum-aggregate.input';
import { ConstructionLogMinAggregateInput } from './construction-log-min-aggregate.input';
import { ConstructionLogMaxAggregateInput } from './construction-log-max-aggregate.input';

@ArgsType()
export class ConstructionLogAggregateArgs {

    @Field(() => ConstructionLogWhereInput, {nullable:true})
    @Type(() => ConstructionLogWhereInput)
    where?: ConstructionLogWhereInput;

    @Field(() => [ConstructionLogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ConstructionLogOrderByWithRelationInput>;

    @Field(() => ConstructionLogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ConstructionLogWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ConstructionLogCountAggregateInput, {nullable:true})
    _count?: ConstructionLogCountAggregateInput;

    @Field(() => ConstructionLogAvgAggregateInput, {nullable:true})
    _avg?: ConstructionLogAvgAggregateInput;

    @Field(() => ConstructionLogSumAggregateInput, {nullable:true})
    _sum?: ConstructionLogSumAggregateInput;

    @Field(() => ConstructionLogMinAggregateInput, {nullable:true})
    _min?: ConstructionLogMinAggregateInput;

    @Field(() => ConstructionLogMaxAggregateInput, {nullable:true})
    _max?: ConstructionLogMaxAggregateInput;
}
