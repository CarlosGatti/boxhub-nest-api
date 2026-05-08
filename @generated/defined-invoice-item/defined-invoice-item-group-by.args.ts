import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInvoiceItemWhereInput } from './defined-invoice-item-where.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceItemOrderByWithAggregationInput } from './defined-invoice-item-order-by-with-aggregation.input';
import { DefinedInvoiceItemScalarFieldEnum } from './defined-invoice-item-scalar-field.enum';
import { DefinedInvoiceItemScalarWhereWithAggregatesInput } from './defined-invoice-item-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedInvoiceItemCountAggregateInput } from './defined-invoice-item-count-aggregate.input';
import { DefinedInvoiceItemAvgAggregateInput } from './defined-invoice-item-avg-aggregate.input';
import { DefinedInvoiceItemSumAggregateInput } from './defined-invoice-item-sum-aggregate.input';
import { DefinedInvoiceItemMinAggregateInput } from './defined-invoice-item-min-aggregate.input';
import { DefinedInvoiceItemMaxAggregateInput } from './defined-invoice-item-max-aggregate.input';

@ArgsType()
export class DefinedInvoiceItemGroupByArgs {

    @Field(() => DefinedInvoiceItemWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceItemWhereInput)
    where?: DefinedInvoiceItemWhereInput;

    @Field(() => [DefinedInvoiceItemOrderByWithAggregationInput], {nullable:true})
    @Type(() => DefinedInvoiceItemOrderByWithAggregationInput)
    orderBy?: Array<DefinedInvoiceItemOrderByWithAggregationInput>;

    @Field(() => [DefinedInvoiceItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedInvoiceItemScalarFieldEnum>;

    @Field(() => DefinedInvoiceItemScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => DefinedInvoiceItemScalarWhereWithAggregatesInput)
    having?: DefinedInvoiceItemScalarWhereWithAggregatesInput;

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
