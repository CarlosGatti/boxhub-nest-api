import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerStageCountAggregate } from './defined-academy-career-stage-count-aggregate.output';
import { DefinedAcademyCareerStageAvgAggregate } from './defined-academy-career-stage-avg-aggregate.output';
import { DefinedAcademyCareerStageSumAggregate } from './defined-academy-career-stage-sum-aggregate.output';
import { DefinedAcademyCareerStageMinAggregate } from './defined-academy-career-stage-min-aggregate.output';
import { DefinedAcademyCareerStageMaxAggregate } from './defined-academy-career-stage-max-aggregate.output';

@ObjectType()
export class DefinedAcademyCareerStageGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    journeyId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    summary?: string;

    @Field(() => String, {nullable:true})
    iconKey?: string;

    @Field(() => Int, {nullable:false})
    sortOrder!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
