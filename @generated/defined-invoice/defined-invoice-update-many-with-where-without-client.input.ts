import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceScalarWhereInput } from './defined-invoice-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceUpdateManyMutationInput } from './defined-invoice-update-many-mutation.input';

@InputType()
export class DefinedInvoiceUpdateManyWithWhereWithoutClientInput {

    @Field(() => DefinedInvoiceScalarWhereInput, {nullable:false})
    @Type(() => DefinedInvoiceScalarWhereInput)
    where!: DefinedInvoiceScalarWhereInput;

    @Field(() => DefinedInvoiceUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedInvoiceUpdateManyMutationInput)
    data!: DefinedInvoiceUpdateManyMutationInput;
}
