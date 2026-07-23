import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageWhereInput } from './defined-academy-career-stage-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageUpdateWithoutCurrentProfilesInput } from './defined-academy-career-stage-update-without-current-profiles.input';

@InputType()
export class DefinedAcademyCareerStageUpdateToOneWithWhereWithoutCurrentProfilesInput {

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereInput)
    where?: DefinedAcademyCareerStageWhereInput;

    @Field(() => DefinedAcademyCareerStageUpdateWithoutCurrentProfilesInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageUpdateWithoutCurrentProfilesInput)
    data!: DefinedAcademyCareerStageUpdateWithoutCurrentProfilesInput;
}
