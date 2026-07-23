import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyStatus } from '../prisma/defined-academy-career-journey-status.enum';
import { DefinedAcademy } from '../defined-academy/defined-academy.model';
import { DefinedAcademyCareerStage } from '../defined-academy-career-stage/defined-academy-career-stage.model';
import { DefinedAcademyUserCareerProfile } from '../defined-academy-user-career-profile/defined-academy-user-career-profile.model';
import { DefinedAcademyCareerJourneyCount } from './defined-academy-career-journey-count.output';

@ObjectType()
export class DefinedAcademyCareerJourney {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => DefinedAcademyCareerJourneyStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof DefinedAcademyCareerJourneyStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedAcademy, {nullable:false})
    academy?: DefinedAcademy;

    @Field(() => [DefinedAcademyCareerStage], {nullable:true})
    stages?: Array<DefinedAcademyCareerStage>;

    @Field(() => [DefinedAcademyUserCareerProfile], {nullable:true})
    profiles?: Array<DefinedAcademyUserCareerProfile>;

    @Field(() => DefinedAcademyCareerJourneyCount, {nullable:false})
    _count?: DefinedAcademyCareerJourneyCount;
}
