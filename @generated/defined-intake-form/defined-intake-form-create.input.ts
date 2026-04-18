import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormType } from '../prisma/defined-intake-form-type.enum';
import { DefinedIntakeFormStatus } from '../prisma/defined-intake-form-status.enum';
import { DefinedClientCreateNestedOneWithoutIntakeFormsInput } from '../defined-client/defined-client-create-nested-one-without-intake-forms.input';
import { DefinedProjectCreateNestedOneWithoutIntakeFormsInput } from '../defined-project/defined-project-create-nested-one-without-intake-forms.input';
import { DefinedIntakeAnswerCreateNestedManyWithoutIntakeFormInput } from '../defined-intake-answer/defined-intake-answer-create-nested-many-without-intake-form.input';

@InputType()
export class DefinedIntakeFormCreateInput {

    @Field(() => DefinedIntakeFormType, {nullable:false})
    formType!: keyof typeof DefinedIntakeFormType;

    @Field(() => DefinedIntakeFormStatus, {nullable:true})
    status?: keyof typeof DefinedIntakeFormStatus;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    shareToken?: string;

    @Field(() => Date, {nullable:true})
    shareTokenCreatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    shareTokenExpiresAt?: Date | string;

    @Field(() => Date, {nullable:true})
    shareRevokedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    submittedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedClientCreateNestedOneWithoutIntakeFormsInput, {nullable:false})
    client!: DefinedClientCreateNestedOneWithoutIntakeFormsInput;

    @Field(() => DefinedProjectCreateNestedOneWithoutIntakeFormsInput, {nullable:true})
    project?: DefinedProjectCreateNestedOneWithoutIntakeFormsInput;

    @Field(() => DefinedIntakeAnswerCreateNestedManyWithoutIntakeFormInput, {nullable:true})
    answers?: DefinedIntakeAnswerCreateNestedManyWithoutIntakeFormInput;
}
