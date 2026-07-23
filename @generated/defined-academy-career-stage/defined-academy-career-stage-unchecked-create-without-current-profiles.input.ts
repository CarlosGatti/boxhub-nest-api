import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentUncheckedCreateNestedManyWithoutStageInput } from '../defined-academy-career-stage-content/defined-academy-career-stage-content-unchecked-create-nested-many-without-stage.input';
import { DefinedAcademyUserCareerStageCompletionUncheckedCreateNestedManyWithoutStageInput } from '../defined-academy-user-career-stage-completion/defined-academy-user-career-stage-completion-unchecked-create-nested-many-without-stage.input';

@InputType()
export class DefinedAcademyCareerStageUncheckedCreateWithoutCurrentProfilesInput {

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

    @Field(() => DefinedAcademyCareerStageContentUncheckedCreateNestedManyWithoutStageInput, {nullable:true})
    contentLinks?: DefinedAcademyCareerStageContentUncheckedCreateNestedManyWithoutStageInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionUncheckedCreateNestedManyWithoutStageInput, {nullable:true})
    completions?: DefinedAcademyUserCareerStageCompletionUncheckedCreateNestedManyWithoutStageInput;
}
