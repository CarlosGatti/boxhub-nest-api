import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentType } from '../prisma/defined-academy-career-stage-content-type.enum';
import { DefinedAcademyCareerStageContentCountAggregate } from './defined-academy-career-stage-content-count-aggregate.output';
import { DefinedAcademyCareerStageContentAvgAggregate } from './defined-academy-career-stage-content-avg-aggregate.output';
import { DefinedAcademyCareerStageContentSumAggregate } from './defined-academy-career-stage-content-sum-aggregate.output';
import { DefinedAcademyCareerStageContentMinAggregate } from './defined-academy-career-stage-content-min-aggregate.output';
import { DefinedAcademyCareerStageContentMaxAggregate } from './defined-academy-career-stage-content-max-aggregate.output';

@ObjectType()
export class DefinedAcademyCareerStageContentGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    stageId!: number;

    @Field(() => DefinedAcademyCareerStageContentType, {nullable:false})
    contentType!: keyof typeof DefinedAcademyCareerStageContentType;

    @Field(() => Int, {nullable:true})
    courseId?: number;

    @Field(() => Int, {nullable:true})
    resourceId?: number;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => Int, {nullable:false})
    sortOrder!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
