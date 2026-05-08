import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInvoiceItemWhereInput } from './defined-invoice-item-where.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceItemOrderByWithRelationInput } from './defined-invoice-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceItemWhereUniqueInput } from './defined-invoice-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedInvoiceItemScalarFieldEnum } from './defined-invoice-item-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedInvoiceItemOrThrowArgs {

    @Field(() => DefinedInvoiceItemWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceItemWhereInput)
    where?: DefinedInvoiceItemWhereInput;

    @Field(() => [DefinedInvoiceItemOrderByWithRelationInput], {nullable:true})
    @Type(() => DefinedInvoiceItemOrderByWithRelationInput)
    orderBy?: Array<DefinedInvoiceItemOrderByWithRelationInput>;

    @Field(() => DefinedInvoiceItemWhereUniqueInput, {nullable:true})
    @Type(() => DefinedInvoiceItemWhereUniqueInput)
    cursor?: Prisma.AtLeast<DefinedInvoiceItemWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedInvoiceItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedInvoiceItemScalarFieldEnum>;
}
