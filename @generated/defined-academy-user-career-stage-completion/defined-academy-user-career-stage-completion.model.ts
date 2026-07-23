import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfile } from '../defined-academy-user-career-profile/defined-academy-user-career-profile.model';
import { DefinedAcademyCareerStage } from '../defined-academy-career-stage/defined-academy-career-stage.model';

@ObjectType()
export class DefinedAcademyUserCareerStageCompletion {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Int, {nullable:false})
    stageId!: number;

    @Field(() => Date, {nullable:false})
    completedAt!: Date;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => DefinedAcademyUserCareerProfile, {nullable:false})
    profile?: DefinedAcademyUserCareerProfile;

    @Field(() => DefinedAcademyCareerStage, {nullable:false})
    stage?: DefinedAcademyCareerStage;
}
