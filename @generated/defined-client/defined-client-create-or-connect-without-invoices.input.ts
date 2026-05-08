import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateWithoutInvoicesInput } from './defined-client-create-without-invoices.input';

@InputType()
export class DefinedClientCreateOrConnectWithoutInvoicesInput {

    @Field(() => DefinedClientWhereUniqueInput, {nullable:false})
    @Type(() => DefinedClientWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;

    @Field(() => DefinedClientCreateWithoutInvoicesInput, {nullable:false})
    @Type(() => DefinedClientCreateWithoutInvoicesInput)
    create!: DefinedClientCreateWithoutInvoicesInput;
}
