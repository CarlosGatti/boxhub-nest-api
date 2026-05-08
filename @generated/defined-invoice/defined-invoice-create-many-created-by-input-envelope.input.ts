import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceCreateManyCreatedByInput } from './defined-invoice-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedInvoiceCreateManyCreatedByInputEnvelope {

    @Field(() => [DefinedInvoiceCreateManyCreatedByInput], {nullable:false})
    @Type(() => DefinedInvoiceCreateManyCreatedByInput)
    data!: Array<DefinedInvoiceCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
