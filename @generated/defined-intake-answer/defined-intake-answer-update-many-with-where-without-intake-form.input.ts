import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeAnswerScalarWhereInput } from './defined-intake-answer-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedIntakeAnswerUpdateManyMutationInput } from './defined-intake-answer-update-many-mutation.input';

@InputType()
export class DefinedIntakeAnswerUpdateManyWithWhereWithoutIntakeFormInput {

    @Field(() => DefinedIntakeAnswerScalarWhereInput, {nullable:false})
    @Type(() => DefinedIntakeAnswerScalarWhereInput)
    where!: DefinedIntakeAnswerScalarWhereInput;

    @Field(() => DefinedIntakeAnswerUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedIntakeAnswerUpdateManyMutationInput)
    data!: DefinedIntakeAnswerUpdateManyMutationInput;
}
