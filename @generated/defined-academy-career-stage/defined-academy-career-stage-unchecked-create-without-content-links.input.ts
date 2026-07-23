import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileUncheckedCreateNestedManyWithoutCurrentStageInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-unchecked-create-nested-many-without-current-stage.input';
import { DefinedAcademyUserCareerStageCompletionUncheckedCreateNestedManyWithoutStageInput } from '../defined-academy-user-career-stage-completion/defined-academy-user-career-stage-completion-unchecked-create-nested-many-without-stage.input';

@InputType()
export class DefinedAcademyCareerStageUncheckedCreateWithoutContentLinksInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    journeyId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    summary?: string;

    @Field(() => String, {nullable:true})
    iconKey?: string;

    @Field(() => Int, {nullable:true})
    sortOrder?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyUserCareerProfileUncheckedCreateNestedManyWithoutCurrentStageInput, {nullable:true})
    currentProfiles?: DefinedAcademyUserCareerProfileUncheckedCreateNestedManyWithoutCurrentStageInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionUncheckedCreateNestedManyWithoutStageInput, {nullable:true})
    completions?: DefinedAcademyUserCareerStageCompletionUncheckedCreateNestedManyWithoutStageInput;
}
