import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageCountAggregate } from './defined-academy-career-stage-count-aggregate.output';
import { DefinedAcademyCareerStageAvgAggregate } from './defined-academy-career-stage-avg-aggregate.output';
import { DefinedAcademyCareerStageSumAggregate } from './defined-academy-career-stage-sum-aggregate.output';
import { DefinedAcademyCareerStageMinAggregate } from './defined-academy-career-stage-min-aggregate.output';
import { DefinedAcademyCareerStageMaxAggregate } from './defined-academy-career-stage-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyCareerStage {

    @Field(() => DefinedAcademyCareerStageCountAggregate, {nullable:true})
    _count?: DefinedAcademyCareerStageCountAggregate;

    @Field(() => DefinedAcademyCareerStageAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyCareerStageAvgAggregate;

    @Field(() => DefinedAcademyCareerStageSumAggregate, {nullable:true})
    _sum?: DefinedAcademyCareerStageSumAggregate;

    @Field(() => DefinedAcademyCareerStageMinAggregate, {nullable:true})
    _min?: DefinedAcademyCareerStageMinAggregate;

    @Field(() => DefinedAcademyCareerStageMaxAggregate, {nullable:true})
    _max?: DefinedAcademyCareerStageMaxAggregate;
}
