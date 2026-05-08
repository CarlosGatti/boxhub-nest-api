import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceItemScalarWhereInput } from './defined-invoice-item-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceItemUpdateManyMutationInput } from './defined-invoice-item-update-many-mutation.input';

@InputType()
export class DefinedInvoiceItemUpdateManyWithWhereWithoutInvoiceInput {

    @Field(() => DefinedInvoiceItemScalarWhereInput, {nullable:false})
    @Type(() => DefinedInvoiceItemScalarWhereInput)
    where!: DefinedInvoiceItemScalarWhereInput;

    @Field(() => DefinedInvoiceItemUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedInvoiceItemUpdateManyMutationInput)
    data!: DefinedInvoiceItemUpdateManyMutationInput;
}
