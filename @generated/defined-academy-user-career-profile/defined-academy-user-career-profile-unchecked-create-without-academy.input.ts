import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionUncheckedCreateNestedManyWithoutProfileInput } from '../defined-academy-user-career-stage-completion/defined-academy-user-career-stage-completion-unchecked-create-nested-many-without-profile.input';

@InputType()
export class DefinedAcademyUserCareerProfileUncheckedCreateWithoutAcademyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    journeyId!: number;

    @Field(() => Int, {nullable:true})
    currentStageId?: number;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyUserCareerStageCompletionUncheckedCreateNestedManyWithoutProfileInput, {nullable:true})
    completions?: DefinedAcademyUserCareerStageCompletionUncheckedCreateNestedManyWithoutProfileInput;
}
