import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInvoiceItemWhereInput } from './defined-invoice-item-where.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceItemOrderByWithRelationInput } from './defined-invoice-item-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedInvoiceItemWhereUniqueInput } from './defined-invoice-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedInvoiceItemCountAggregateInput } from './defined-invoice-item-count-aggregate.input';
import { DefinedInvoiceItemAvgAggregateInput } from './defined-invoice-item-avg-aggregate.input';
import { DefinedInvoiceItemSumAggregateInput } from './defined-invoice-item-sum-aggregate.input';
import { DefinedInvoiceItemMinAggregateInput } from './defined-invoice-item-min-aggregate.input';
import { DefinedInvoiceItemMaxAggregateInput } from './defined-invoice-item-max-aggregate.input';

@ArgsType()
export class DefinedInvoiceItemAggregateArgs {

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

    @Field(() => DefinedInvoiceItemCountAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceItemCountAggregateInput)
    _count?: DefinedInvoiceItemCountAggregateInput;

    @Field(() => DefinedInvoiceItemAvgAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceItemAvgAggregateInput)
    _avg?: DefinedInvoiceItemAvgAggregateInput;

    @Field(() => DefinedInvoiceItemSumAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceItemSumAggregateInput)
    _sum?: DefinedInvoiceItemSumAggregateInput;

    @Field(() => DefinedInvoiceItemMinAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceItemMinAggregateInput)
    _min?: DefinedInvoiceItemMinAggregateInput;

    @Field(() => DefinedInvoiceItemMaxAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceItemMaxAggregateInput)
    _max?: DefinedInvoiceItemMaxAggregateInput;
}
