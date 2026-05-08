import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientCreateWithoutInvoicesInput } from './defined-client-create-without-invoices.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateOrConnectWithoutInvoicesInput } from './defined-client-create-or-connect-without-invoices.input';
import { DefinedClientUpsertWithoutInvoicesInput } from './defined-client-upsert-without-invoices.input';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';
import { DefinedClientUpdateToOneWithWhereWithoutInvoicesInput } from './defined-client-update-to-one-with-where-without-invoices.input';

@InputType()
export class DefinedClientUpdateOneRequiredWithoutInvoicesNestedInput {

    @Field(() => DefinedClientCreateWithoutInvoicesInput, {nullable:true})
    @Type(() => DefinedClientCreateWithoutInvoicesInput)
    create?: DefinedClientCreateWithoutInvoicesInput;

    @Field(() => DefinedClientCreateOrConnectWithoutInvoicesInput, {nullable:true})
    @Type(() => DefinedClientCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: DefinedClientCreateOrConnectWithoutInvoicesInput;

    @Field(() => DefinedClientUpsertWithoutInvoicesInput, {nullable:true})
    @Type(() => DefinedClientUpsertWithoutInvoicesInput)
    upsert?: DefinedClientUpsertWithoutInvoicesInput;

    @Field(() => DefinedClientWhereUniqueInput, {nullable:true})
    @Type(() => DefinedClientWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;

    @Field(() => DefinedClientUpdateToOneWithWhereWithoutInvoicesInput, {nullable:true})
    @Type(() => DefinedClientUpdateToOneWithWhereWithoutInvoicesInput)
    update?: DefinedClientUpdateToOneWithWhereWithoutInvoicesInput;
}
