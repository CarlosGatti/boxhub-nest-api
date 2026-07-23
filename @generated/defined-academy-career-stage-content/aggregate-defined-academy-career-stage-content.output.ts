import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentCountAggregate } from './defined-academy-career-stage-content-count-aggregate.output';
import { DefinedAcademyCareerStageContentAvgAggregate } from './defined-academy-career-stage-content-avg-aggregate.output';
import { DefinedAcademyCareerStageContentSumAggregate } from './defined-academy-career-stage-content-sum-aggregate.output';
import { DefinedAcademyCareerStageContentMinAggregate } from './defined-academy-career-stage-content-min-aggregate.output';
import { DefinedAcademyCareerStageContentMaxAggregate } from './defined-academy-career-stage-content-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyCareerStageContent {

    @Field(() => DefinedAcademyCareerStageContentCountAggregate, {nullable:true})
    _count?: DefinedAcademyCareerStageContentCountAggregate;

    @Field(() => DefinedAcademyCareerStageContentAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyCareerStageContentAvgAggregate;

    @Field(() => DefinedAcademyCareerStageContentSumAggregate, {nullable:true})
    _sum?: DefinedAcademyCareerStageContentSumAggregate;

    @Field(() => DefinedAcademyCareerStageContentMinAggregate, {nullable:true})
    _min?: DefinedAcademyCareerStageContentMinAggregate;

    @Field(() => DefinedAcademyCareerStageContentMaxAggregate, {nullable:true})
    _max?: DefinedAcademyCareerStageContentMaxAggregate;
}
