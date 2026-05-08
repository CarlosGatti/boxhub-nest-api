import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceCreateManyClientInput } from './defined-invoice-create-many-client.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedInvoiceCreateManyClientInputEnvelope {

    @Field(() => [DefinedInvoiceCreateManyClientInput], {nullable:false})
    @Type(() => DefinedInvoiceCreateManyClientInput)
    data!: Array<DefinedInvoiceCreateManyClientInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
