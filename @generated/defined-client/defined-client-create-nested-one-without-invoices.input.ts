import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientCreateWithoutInvoicesInput } from './defined-client-create-without-invoices.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateOrConnectWithoutInvoicesInput } from './defined-client-create-or-connect-without-invoices.input';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';

@InputType()
export class DefinedClientCreateNestedOneWithoutInvoicesInput {

    @Field(() => DefinedClientCreateWithoutInvoicesInput, {nullable:true})
    @Type(() => DefinedClientCreateWithoutInvoicesInput)
    create?: DefinedClientCreateWithoutInvoicesInput;

    @Field(() => DefinedClientCreateOrConnectWithoutInvoicesInput, {nullable:true})
    @Type(() => DefinedClientCreateOrConnectWithoutInvoicesInput)
    connectOrCreate?: DefinedClientCreateOrConnectWithoutInvoicesInput;

    @Field(() => DefinedClientWhereUniqueInput, {nullable:true})
    @Type(() => DefinedClientWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;
}
