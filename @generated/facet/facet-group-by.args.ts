import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacetWhereInput } from './facet-where.input';
import { Type } from 'class-transformer';
import { FacetOrderByWithAggregationInput } from './facet-order-by-with-aggregation.input';
import { FacetScalarFieldEnum } from './facet-scalar-field.enum';
import { FacetScalarWhereWithAggregatesInput } from './facet-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FacetCountAggregateInput } from './facet-count-aggregate.input';
import { FacetAvgAggregateInput } from './facet-avg-aggregate.input';
import { FacetSumAggregateInput } from './facet-sum-aggregate.input';
import { FacetMinAggregateInput } from './facet-min-aggregate.input';
import { FacetMaxAggregateInput } from './facet-max-aggregate.input';

@ArgsType()
export class FacetGroupByArgs {

    @Field(() => FacetWhereInput, {nullable:true})
    @Type(() => FacetWhereInput)
    where?: FacetWhereInput;

    @Field(() => [FacetOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FacetOrderByWithAggregationInput>;

    @Field(() => [FacetScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FacetScalarFieldEnum>;

    @Field(() => FacetScalarWhereWithAggregatesInput, {nullable:true})
    having?: FacetScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FacetCountAggregateInput, {nullable:true})
    _count?: FacetCountAggregateInput;

    @Field(() => FacetAvgAggregateInput, {nullable:true})
    _avg?: FacetAvgAggregateInput;

    @Field(() => FacetSumAggregateInput, {nullable:true})
    _sum?: FacetSumAggregateInput;

    @Field(() => FacetMinAggregateInput, {nullable:true})
    _min?: FacetMinAggregateInput;

    @Field(() => FacetMaxAggregateInput, {nullable:true})
    _max?: FacetMaxAggregateInput;
}
