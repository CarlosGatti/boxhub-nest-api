import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyCreateNestedOneWithoutStagesInput } from '../defined-academy-career-journey/defined-academy-career-journey-create-nested-one-without-stages.input';
import { DefinedAcademyCareerStageContentCreateNestedManyWithoutStageInput } from '../defined-academy-career-stage-content/defined-academy-career-stage-content-create-nested-many-without-stage.input';
import { DefinedAcademyUserCareerStageCompletionCreateNestedManyWithoutStageInput } from '../defined-academy-user-career-stage-completion/defined-academy-user-career-stage-completion-create-nested-many-without-stage.input';

@InputType()
export class DefinedAcademyCareerStageCreateWithoutCurrentProfilesInput {

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

    @Field(() => DefinedAcademyCareerJourneyCreateNestedOneWithoutStagesInput, {nullable:false})
    journey!: DefinedAcademyCareerJourneyCreateNestedOneWithoutStagesInput;

    @Field(() => DefinedAcademyCareerStageContentCreateNestedManyWithoutStageInput, {nullable:true})
    contentLinks?: DefinedAcademyCareerStageContentCreateNestedManyWithoutStageInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionCreateNestedManyWithoutStageInput, {nullable:true})
    completions?: DefinedAcademyUserCareerStageCompletionCreateNestedManyWithoutStageInput;
}
