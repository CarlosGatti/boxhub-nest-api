import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormScalarWhereInput } from './defined-intake-form-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormUpdateManyMutationInput } from './defined-intake-form-update-many-mutation.input';

@InputType()
export class DefinedIntakeFormUpdateManyWithWhereWithoutClientInput {

    @Field(() => DefinedIntakeFormScalarWhereInput, {nullable:false})
    @Type(() => DefinedIntakeFormScalarWhereInput)
    where!: DefinedIntakeFormScalarWhereInput;

    @Field(() => DefinedIntakeFormUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedIntakeFormUpdateManyMutationInput)
    data!: DefinedIntakeFormUpdateManyMutationInput;
}
