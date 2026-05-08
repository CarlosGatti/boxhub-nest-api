import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedInvoiceWhereInput } from './defined-invoice-where.input';
import { Type } from 'class-transformer';
import { DefinedInvoiceOrderByWithAggregationInput } from './defined-invoice-order-by-with-aggregation.input';
import { DefinedInvoiceScalarFieldEnum } from './defined-invoice-scalar-field.enum';
import { DefinedInvoiceScalarWhereWithAggregatesInput } from './defined-invoice-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedInvoiceCountAggregateInput } from './defined-invoice-count-aggregate.input';
import { DefinedInvoiceAvgAggregateInput } from './defined-invoice-avg-aggregate.input';
import { DefinedInvoiceSumAggregateInput } from './defined-invoice-sum-aggregate.input';
import { DefinedInvoiceMinAggregateInput } from './defined-invoice-min-aggregate.input';
import { DefinedInvoiceMaxAggregateInput } from './defined-invoice-max-aggregate.input';

@ArgsType()
export class DefinedInvoiceGroupByArgs {

    @Field(() => DefinedInvoiceWhereInput, {nullable:true})
    @Type(() => DefinedInvoiceWhereInput)
    where?: DefinedInvoiceWhereInput;

    @Field(() => [DefinedInvoiceOrderByWithAggregationInput], {nullable:true})
    @Type(() => DefinedInvoiceOrderByWithAggregationInput)
    orderBy?: Array<DefinedInvoiceOrderByWithAggregationInput>;

    @Field(() => [DefinedInvoiceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedInvoiceScalarFieldEnum>;

    @Field(() => DefinedInvoiceScalarWhereWithAggregatesInput, {nullable:true})
    @Type(() => DefinedInvoiceScalarWhereWithAggregatesInput)
    having?: DefinedInvoiceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedInvoiceCountAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceCountAggregateInput)
    _count?: DefinedInvoiceCountAggregateInput;

    @Field(() => DefinedInvoiceAvgAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceAvgAggregateInput)
    _avg?: DefinedInvoiceAvgAggregateInput;

    @Field(() => DefinedInvoiceSumAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceSumAggregateInput)
    _sum?: DefinedInvoiceSumAggregateInput;

    @Field(() => DefinedInvoiceMinAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceMinAggregateInput)
    _min?: DefinedInvoiceMinAggregateInput;

    @Field(() => DefinedInvoiceMaxAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceMaxAggregateInput)
    _max?: DefinedInvoiceMaxAggregateInput;
}
