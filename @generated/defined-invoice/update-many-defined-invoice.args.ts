import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInvoiceUpdateManyMutationInput } from './defined-invoice-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceWhereInput } from './defined-invoice-where.input';

@ArgsType()
export class UpdateManyDefinedInvoiceArgs {

    @Field(() => DefinedInvoiceUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedInvoiceUpdateManyMutationInput)
    data!: DefinedInvoiceUpdateManyMutationInput;

    @Field(() => DefinedInvoiceWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceWhereInput)
    where?: DefinedInvoiceWhereInput;
}
