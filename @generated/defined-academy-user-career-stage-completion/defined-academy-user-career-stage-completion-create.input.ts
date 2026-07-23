import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateNestedOneWithoutCompletionsInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-create-nested-one-without-completions.input';
import { DefinedAcademyCareerStageCreateNestedOneWithoutCompletionsInput } from '../defined-academy-career-stage/defined-academy-career-stage-create-nested-one-without-completions.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionCreateInput {

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => DefinedAcademyUserCareerProfileCreateNestedOneWithoutCompletionsInput, {nullable:false})
    profile!: DefinedAcademyUserCareerProfileCreateNestedOneWithoutCompletionsInput;

    @Field(() => DefinedAcademyCareerStageCreateNestedOneWithoutCompletionsInput, {nullable:false})
    stage!: DefinedAcademyCareerStageCreateNestedOneWithoutCompletionsInput;
}
