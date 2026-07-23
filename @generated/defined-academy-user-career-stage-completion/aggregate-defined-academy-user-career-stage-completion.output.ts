import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionCountAggregate } from './defined-academy-user-career-stage-completion-count-aggregate.output';
import { DefinedAcademyUserCareerStageCompletionAvgAggregate } from './defined-academy-user-career-stage-completion-avg-aggregate.output';
import { DefinedAcademyUserCareerStageCompletionSumAggregate } from './defined-academy-user-career-stage-completion-sum-aggregate.output';
import { DefinedAcademyUserCareerStageCompletionMinAggregate } from './defined-academy-user-career-stage-completion-min-aggregate.output';
import { DefinedAcademyUserCareerStageCompletionMaxAggregate } from './defined-academy-user-career-stage-completion-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyUserCareerStageCompletion {

    @Field(() => DefinedAcademyUserCareerStageCompletionCountAggregate, {nullable:true})
    _count?: DefinedAcademyUserCareerStageCompletionCountAggregate;

    @Field(() => DefinedAcademyUserCareerStageCompletionAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyUserCareerStageCompletionAvgAggregate;

    @Field(() => DefinedAcademyUserCareerStageCompletionSumAggregate, {nullable:true})
    _sum?: DefinedAcademyUserCareerStageCompletionSumAggregate;

    @Field(() => DefinedAcademyUserCareerStageCompletionMinAggregate, {nullable:true})
    _min?: DefinedAcademyUserCareerStageCompletionMinAggregate;

    @Field(() => DefinedAcademyUserCareerStageCompletionMaxAggregate, {nullable:true})
    _max?: DefinedAcademyUserCareerStageCompletionMaxAggregate;
}
