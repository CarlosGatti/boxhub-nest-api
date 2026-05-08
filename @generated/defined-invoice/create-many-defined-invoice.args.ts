import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInvoiceCreateManyInput } from './defined-invoice-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedInvoiceArgs {

    @Field(() => [DefinedInvoiceCreateManyInput], {nullable:false})
    @Type(() => DefinedInvoiceCreateManyInput)
    data!: Array<DefinedInvoiceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
