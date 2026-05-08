import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInvoiceCreateManyProjectInput } from './defined-invoice-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedInvoiceCreateManyProjectInputEnvelope {

    @Field(() => [DefinedInvoiceCreateManyProjectInput], {nullable:false})
    @Type(() => DefinedInvoiceCreateManyProjectInput)
    data!: Array<DefinedInvoiceCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
