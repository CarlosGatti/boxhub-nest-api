import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedIntakeAnswerCountAggregate } from './defined-intake-answer-count-aggregate.output';
import { DefinedIntakeAnswerAvgAggregate } from './defined-intake-answer-avg-aggregate.output';
import { DefinedIntakeAnswerSumAggregate } from './defined-intake-answer-sum-aggregate.output';
import { DefinedIntakeAnswerMinAggregate } from './defined-intake-answer-min-aggregate.output';
import { DefinedIntakeAnswerMaxAggregate } from './defined-intake-answer-max-aggregate.output';

@ObjectType()
export class AggregateDefinedIntakeAnswer {

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
