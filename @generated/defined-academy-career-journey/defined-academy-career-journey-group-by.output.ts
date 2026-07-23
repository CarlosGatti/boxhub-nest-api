import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyStatus } from '../prisma/defined-academy-career-journey-status.enum';
import { DefinedAcademyCareerJourneyCountAggregate } from './defined-academy-career-journey-count-aggregate.output';
import { DefinedAcademyCareerJourneyAvgAggregate } from './defined-academy-career-journey-avg-aggregate.output';
import { DefinedAcademyCareerJourneySumAggregate } from './defined-academy-career-journey-sum-aggregate.output';
import { DefinedAcademyCareerJourneyMinAggregate } from './defined-academy-career-journey-min-aggregate.output';
import { DefinedAcademyCareerJourneyMaxAggregate } from './defined-academy-career-journey-max-aggregate.output';

@ObjectType()
export class DefinedAcademyCareerJourneyGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedAcademyCareerJourneyStatus, {nullable:false})
    status!: keyof typeof DefinedAcademyCareerJourneyStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedAcademyCareerJourneyCountAggregate, {nullable:true})
    _count?: DefinedAcademyCareerJourneyCountAggregate;

    @Field(() => DefinedAcademyCareerJourneyAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyCareerJourneyAvgAggregate;

    @Field(() => DefinedAcademyCareerJourneySumAggregate, {nullable:true})
    _sum?: DefinedAcademyCareerJourneySumAggregate;

    @Field(() => DefinedAcademyCareerJourneyMinAggregate, {nullable:true})
    _min?: DefinedAcademyCareerJourneyMinAggregate;

    @Field(() => DefinedAcademyCareerJourneyMaxAggregate, {nullable:true})
    _max?: DefinedAcademyCareerJourneyMaxAggregate;
}
