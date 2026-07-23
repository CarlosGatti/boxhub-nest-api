import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageCreateNestedOneWithoutCompletionsInput } from '../defined-academy-career-stage/defined-academy-career-stage-create-nested-one-without-completions.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionCreateWithoutProfileInput {

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => DefinedAcademyCareerStageCreateNestedOneWithoutCompletionsInput, {nullable:false})
    stage!: DefinedAcademyCareerStageCreateNestedOneWithoutCompletionsInput;
}
