import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { DefinedAcademy } from '../defined-academy/defined-academy.model';
import { DefinedAcademyCareerJourney } from '../defined-academy-career-journey/defined-academy-career-journey.model';
import { DefinedAcademyCareerStage } from '../defined-academy-career-stage/defined-academy-career-stage.model';
import { DefinedAcademyUserCareerStageCompletion } from '../defined-academy-user-career-stage-completion/defined-academy-user-career-stage-completion.model';
import { DefinedAcademyUserCareerProfileCount } from './defined-academy-user-career-profile-count.output';

@ObjectType()
export class DefinedAcademyUserCareerProfile {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => Int, {nullable:false})
    journeyId!: number;

    @Field(() => Int, {nullable:true})
    currentStageId!: number | null;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => DefinedAcademy, {nullable:false})
    academy?: DefinedAcademy;

    @Field(() => DefinedAcademyCareerJourney, {nullable:false})
    journey?: DefinedAcademyCareerJourney;

    @Field(() => DefinedAcademyCareerStage, {nullable:true})
    currentStage?: DefinedAcademyCareerStage | null;

    @Field(() => [DefinedAcademyUserCareerStageCompletion], {nullable:true})
    completions?: Array<DefinedAcademyUserCareerStageCompletion>;

    @Field(() => DefinedAcademyUserCareerProfileCount, {nullable:false})
    _count?: DefinedAcademyUserCareerProfileCount;
}
