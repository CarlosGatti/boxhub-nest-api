import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientUpdateWithoutInvoicesInput } from './defined-client-update-without-invoices.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateWithoutInvoicesInput } from './defined-client-create-without-invoices.input';
import { DefinedClientWhereInput } from './defined-client-where.input';

@InputType()
export class DefinedClientUpsertWithoutInvoicesInput {

    @Field(() => DefinedClientUpdateWithoutInvoicesInput, {nullable:false})
    @Type(() => DefinedClientUpdateWithoutInvoicesInput)
    update!: DefinedClientUpdateWithoutInvoicesInput;

    @Field(() => DefinedClientCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => DefinedClientCreateWithoutInvoicesInput)
    create!: DefinedClientCreateWithoutInvoicesInput;

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;
}
