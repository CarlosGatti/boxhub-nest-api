import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedIntakeAnswerType } from '../prisma/defined-intake-answer-type.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedIntakeAnswerCountAggregate } from './defined-intake-answer-count-aggregate.output';
import { DefinedIntakeAnswerAvgAggregate } from './defined-intake-answer-avg-aggregate.output';
import { DefinedIntakeAnswerSumAggregate } from './defined-intake-answer-sum-aggregate.output';
import { DefinedIntakeAnswerMinAggregate } from './defined-intake-answer-min-aggregate.output';
import { DefinedIntakeAnswerMaxAggregate } from './defined-intake-answer-max-aggregate.output';

@ObjectType()
export class DefinedIntakeAnswerGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    intakeFormId!: number;

    @Field(() => String, {nullable:false})
    questionKey!: string;

    @Field(() => String, {nullable:true})
    questionLabel?: string;

    @Field(() => DefinedIntakeAnswerType, {nullable:false})
    answerType!: keyof typeof DefinedIntakeAnswerType;

    @Field(() => GraphQLJSON, {nullable:false})
    answerValue!: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedIntakeAnswerCountAggregate, {nullable:true})
    _count?: DefinedIntakeAnswerCountAggregate;

    @Field(() => DefinedIntakeAnswerAvgAggregate, {nullable:true})
    _avg?: DefinedIntakeAnswerAvgAggregate;

    @Field(() => DefinedIntakeAnswerSumAggregate, {nullable:true})
    _sum?: DefinedIntakeAnswerSumAggregate;

    @Field(() => DefinedIntakeAnswerMinAggregate, {nullable:true})
    _min?: DefinedIntakeAnswerMinAggregate;

    @Field(() => DefinedIntakeAnswerMaxAggregate, {nullable:true})
    _max?: DefinedIntakeAnswerMaxAggregate;
}
