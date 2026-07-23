import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageUpdateWithoutCurrentProfilesInput } from './defined-academy-career-stage-update-without-current-profiles.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput } from './defined-academy-career-stage-create-without-current-profiles.input';
import { DefinedAcademyCareerStageWhereInput } from './defined-academy-career-stage-where.input';

@InputType()
export class DefinedAcademyCareerStageUpsertWithoutCurrentProfilesInput {

    @Field(() => DefinedAcademyCareerStageUpdateWithoutCurrentProfilesInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageUpdateWithoutCurrentProfilesInput)
    update!: DefinedAcademyCareerStageUpdateWithoutCurrentProfilesInput;

    @Field(() => DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput)
    create!: DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput;

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereInput)
    where?: DefinedAcademyCareerStageWhereInput;
}
