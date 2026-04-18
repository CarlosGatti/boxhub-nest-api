import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedIntakeAnswerWhereInput } from './defined-intake-answer-where.input';
import { Type } from 'class-transformer';
import { DefinedIntakeAnswerOrderByWithRelationInput } from './defined-intake-answer-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedIntakeAnswerWhereUniqueInput } from './defined-intake-answer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedIntakeAnswerCountAggregateInput } from './defined-intake-answer-count-aggregate.input';
import { DefinedIntakeAnswerAvgAggregateInput } from './defined-intake-answer-avg-aggregate.input';
import { DefinedIntakeAnswerSumAggregateInput } from './defined-intake-answer-sum-aggregate.input';
import { DefinedIntakeAnswerMinAggregateInput } from './defined-intake-answer-min-aggregate.input';
import { DefinedIntakeAnswerMaxAggregateInput } from './defined-intake-answer-max-aggregate.input';

@ArgsType()
export class DefinedIntakeAnswerAggregateArgs {

    @Field(() => DefinedIntakeAnswerWhereInput, {nullable:true})
    @Type(() => DefinedIntakeAnswerWhereInput)
    where?: DefinedIntakeAnswerWhereInput;

    @Field(() => [DefinedIntakeAnswerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedIntakeAnswerOrderByWithRelationInput>;

    @Field(() => DefinedIntakeAnswerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedIntakeAnswerWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedIntakeAnswerCountAggregateInput, {nullable:true})
    _count?: DefinedIntakeAnswerCountAggregateInput;

    @Field(() => DefinedIntakeAnswerAvgAggregateInput, {nullable:true})
    _avg?: DefinedIntakeAnswerAvgAggregateInput;

    @Field(() => DefinedIntakeAnswerSumAggregateInput, {nullable:true})
    _sum?: DefinedIntakeAnswerSumAggregateInput;

    @Field(() => DefinedIntakeAnswerMinAggregateInput, {nullable:true})
    _min?: DefinedIntakeAnswerMinAggregateInput;

    @Field(() => DefinedIntakeAnswerMaxAggregateInput, {nullable:true})
    _max?: DefinedIntakeAnswerMaxAggregateInput;
}
