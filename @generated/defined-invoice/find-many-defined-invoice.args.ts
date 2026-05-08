import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInvoiceWhereInput } from './defined-invoice-where.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceOrderByWithRelationInput } from './defined-invoice-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceWhereUniqueInput } from './defined-invoice-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedInvoiceScalarFieldEnum } from './defined-invoice-scalar-field.enum';

@ArgsType()
export class FindManyDefinedInvoiceArgs {

    @Field(() => DefinedInvoiceWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceWhereInput)
    where?: DefinedInvoiceWhereInput;

    @Field(() => [DefinedInvoiceOrderByWithRelationInput], {nullable:true})
    @Type(() => DefinedInvoiceOrderByWithRelationInput)
    orderBy?: Array<DefinedInvoiceOrderByWithRelationInput>;

    @Field(() => DefinedInvoiceWhereUniqueInput, {nullable:true})
    @Type(() => DefinedInvoiceWhereUniqueInput)
    cursor?: Prisma.AtLeast<DefinedInvoiceWhereUniqueInput, 'id' | 'invoiceNumber' | 'publicToken'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedInvoiceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedInvoiceScalarFieldEnum>;
}
