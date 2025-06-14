import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogWhereInput } from './log-where.input';
import { Type } from 'class-transformer';
import { LogOrderByWithRelationInput } from './log-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LogCountAggregateInput } from './log-count-aggregate.input';
import { LogAvgAggregateInput } from './log-avg-aggregate.input';
import { LogSumAggregateInput } from './log-sum-aggregate.input';
import { LogMinAggregateInput } from './log-min-aggregate.input';
import { LogMaxAggregateInput } from './log-max-aggregate.input';

@ArgsType()
export class LogAggregateArgs {

    @Field(() => LogWhereInput, {nullable:true})
    @Type(() => LogWhereInput)
    where?: LogWhereInput;

    @Field(() => [LogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LogOrderByWithRelationInput>;

    @Field(() => LogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LogWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LogCountAggregateInput, {nullable:true})
    _count?: LogCountAggregateInput;

    @Field(() => LogAvgAggregateInput, {nullable:true})
    _avg?: LogAvgAggregateInput;

    @Field(() => LogSumAggregateInput, {nullable:true})
    _sum?: LogSumAggregateInput;

    @Field(() => LogMinAggregateInput, {nullable:true})
    _min?: LogMinAggregateInput;

    @Field(() => LogMaxAggregateInput, {nullable:true})
    _max?: LogMaxAggregateInput;
}
