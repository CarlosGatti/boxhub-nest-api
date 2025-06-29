import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubcontractorWhereInput } from './subcontractor-where.input';
import { Type } from 'class-transformer';
import { SubcontractorOrderByWithAggregationInput } from './subcontractor-order-by-with-aggregation.input';
import { SubcontractorScalarFieldEnum } from './subcontractor-scalar-field.enum';
import { SubcontractorScalarWhereWithAggregatesInput } from './subcontractor-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SubcontractorCountAggregateInput } from './subcontractor-count-aggregate.input';
import { SubcontractorAvgAggregateInput } from './subcontractor-avg-aggregate.input';
import { SubcontractorSumAggregateInput } from './subcontractor-sum-aggregate.input';
import { SubcontractorMinAggregateInput } from './subcontractor-min-aggregate.input';
import { SubcontractorMaxAggregateInput } from './subcontractor-max-aggregate.input';

@ArgsType()
export class SubcontractorGroupByArgs {

    @Field(() => SubcontractorWhereInput, {nullable:true})
    @Type(() => SubcontractorWhereInput)
    where?: SubcontractorWhereInput;

    @Field(() => [SubcontractorOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SubcontractorOrderByWithAggregationInput>;

    @Field(() => [SubcontractorScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SubcontractorScalarFieldEnum>;

    @Field(() => SubcontractorScalarWhereWithAggregatesInput, {nullable:true})
    having?: SubcontractorScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SubcontractorCountAggregateInput, {nullable:true})
    _count?: SubcontractorCountAggregateInput;

    @Field(() => SubcontractorAvgAggregateInput, {nullable:true})
    _avg?: SubcontractorAvgAggregateInput;

    @Field(() => SubcontractorSumAggregateInput, {nullable:true})
    _sum?: SubcontractorSumAggregateInput;

    @Field(() => SubcontractorMinAggregateInput, {nullable:true})
    _min?: SubcontractorMinAggregateInput;

    @Field(() => SubcontractorMaxAggregateInput, {nullable:true})
    _max?: SubcontractorMaxAggregateInput;
}
