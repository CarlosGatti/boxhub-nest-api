import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInvoiceItemUpdateManyMutationInput } from './defined-invoice-item-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceItemWhereInput } from './defined-invoice-item-where.input';

@ArgsType()
export class UpdateManyDefinedInvoiceItemArgs {

    @Field(() => DefinedInvoiceItemUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedInvoiceItemUpdateManyMutationInput)
    data!: DefinedInvoiceItemUpdateManyMutationInput;

    @Field(() => DefinedInvoiceItemWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceItemWhereInput)
    where?: DefinedInvoiceItemWhereInput;
}
