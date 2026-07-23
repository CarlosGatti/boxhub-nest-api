import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerJourney } from '../defined-academy-career-journey/defined-academy-career-journey.model';
import { DefinedAcademyCareerStageContent } from '../defined-academy-career-stage-content/defined-academy-career-stage-content.model';
import { DefinedAcademyUserCareerProfile } from '../defined-academy-user-career-profile/defined-academy-user-career-profile.model';
import { DefinedAcademyUserCareerStageCompletion } from '../defined-academy-user-career-stage-completion/defined-academy-user-career-stage-completion.model';
import { DefinedAcademyCareerStageCount } from './defined-academy-career-stage-count.output';

@ObjectType()
export class DefinedAcademyCareerStage {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    journeyId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    summary!: string | null;

    @Field(() => String, {nullable:true})
    iconKey!: string | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    sortOrder!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedAcademyCareerJourney, {nullable:false})
    journey?: DefinedAcademyCareerJourney;

    @Field(() => [DefinedAcademyCareerStageContent], {nullable:true})
    contentLinks?: Array<DefinedAcademyCareerStageContent>;

    @Field(() => [DefinedAcademyUserCareerProfile], {nullable:true})
    currentProfiles?: Array<DefinedAcademyUserCareerProfile>;

    @Field(() => [DefinedAcademyUserCareerStageCompletion], {nullable:true})
    completions?: Array<DefinedAcademyUserCareerStageCompletion>;

    @Field(() => DefinedAcademyCareerStageCount, {nullable:false})
    _count?: DefinedAcademyCareerStageCount;
}
