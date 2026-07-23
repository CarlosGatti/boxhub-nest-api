import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCountAggregate } from './defined-academy-user-career-profile-count-aggregate.output';
import { DefinedAcademyUserCareerProfileAvgAggregate } from './defined-academy-user-career-profile-avg-aggregate.output';
import { DefinedAcademyUserCareerProfileSumAggregate } from './defined-academy-user-career-profile-sum-aggregate.output';
import { DefinedAcademyUserCareerProfileMinAggregate } from './defined-academy-user-career-profile-min-aggregate.output';
import { DefinedAcademyUserCareerProfileMaxAggregate } from './defined-academy-user-career-profile-max-aggregate.output';

@ObjectType()
export class DefinedAcademyUserCareerProfileGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => Int, {nullable:false})
    journeyId!: number;

    @Field(() => Int, {nullable:true})
    currentStageId?: number;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedAcademyUserCareerProfileCountAggregate, {nullable:true})
    _count?: DefinedAcademyUserCareerProfileCountAggregate;

    @Field(() => DefinedAcademyUserCareerProfileAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyUserCareerProfileAvgAggregate;

    @Field(() => DefinedAcademyUserCareerProfileSumAggregate, {nullable:true})
    _sum?: DefinedAcademyUserCareerProfileSumAggregate;

    @Field(() => DefinedAcademyUserCareerProfileMinAggregate, {nullable:true})
    _min?: DefinedAcademyUserCareerProfileMinAggregate;

    @Field(() => DefinedAcademyUserCareerProfileMaxAggregate, {nullable:true})
    _max?: DefinedAcademyUserCareerProfileMaxAggregate;
}
