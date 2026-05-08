import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientWhereInput } from './defined-client-where.input';
import { Type } from 'class-transformer';
import { DefinedClientUpdateWithoutInvoicesInput } from './defined-client-update-without-invoices.input';

@InputType()
export class DefinedClientUpdateToOneWithWhereWithoutInvoicesInput {

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;

    @Field(() => DefinedClientUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => DefinedClientUpdateWithoutInvoicesInput)
    data!: DefinedClientUpdateWithoutInvoicesInput;
}
