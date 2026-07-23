import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutDefinedAcademyCareerProfilesInput } from '../user/user-create-nested-one-without-defined-academy-career-profiles.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyCreateNestedOneWithoutProfilesInput } from '../defined-academy-career-journey/defined-academy-career-journey-create-nested-one-without-profiles.input';
import { DefinedAcademyCareerStageCreateNestedOneWithoutCurrentProfilesInput } from '../defined-academy-career-stage/defined-academy-career-stage-create-nested-one-without-current-profiles.input';
import { DefinedAcademyUserCareerStageCompletionCreateNestedManyWithoutProfileInput } from '../defined-academy-user-career-stage-completion/defined-academy-user-career-stage-completion-create-nested-many-without-profile.input';

@InputType()
export class DefinedAcademyUserCareerProfileCreateWithoutAcademyInput {

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutDefinedAcademyCareerProfilesInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutDefinedAcademyCareerProfilesInput)
    user!: UserCreateNestedOneWithoutDefinedAcademyCareerProfilesInput;

    @Field(() => DefinedAcademyCareerJourneyCreateNestedOneWithoutProfilesInput, {nullable:false})
    journey!: DefinedAcademyCareerJourneyCreateNestedOneWithoutProfilesInput;

    @Field(() => DefinedAcademyCareerStageCreateNestedOneWithoutCurrentProfilesInput, {nullable:true})
    currentStage?: DefinedAcademyCareerStageCreateNestedOneWithoutCurrentProfilesInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionCreateNestedManyWithoutProfileInput, {nullable:true})
    completions?: DefinedAcademyUserCareerStageCompletionCreateNestedManyWithoutProfileInput;
}
