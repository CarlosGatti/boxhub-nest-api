import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FacetValueWhereInput } from './facet-value-where.input';
import { Type } from 'class-transformer';
import { FacetValueOrderByWithAggregationInput } from './facet-value-order-by-with-aggregation.input';
import { FacetValueScalarFieldEnum } from './facet-value-scalar-field.enum';
import { FacetValueScalarWhereWithAggregatesInput } from './facet-value-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FacetValueCountAggregateInput } from './facet-value-count-aggregate.input';
import { FacetValueAvgAggregateInput } from './facet-value-avg-aggregate.input';
import { FacetValueSumAggregateInput } from './facet-value-sum-aggregate.input';
import { FacetValueMinAggregateInput } from './facet-value-min-aggregate.input';
import { FacetValueMaxAggregateInput } from './facet-value-max-aggregate.input';

@ArgsType()
export class FacetValueGroupByArgs {

    @Field(() => FacetValueWhereInput, {nullable:true})
    @Type(() => FacetValueWhereInput)
    where?: FacetValueWhereInput;

    @Field(() => [FacetValueOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FacetValueOrderByWithAggregationInput>;

    @Field(() => [FacetValueScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FacetValueScalarFieldEnum>;

    @Field(() => FacetValueScalarWhereWithAggregatesInput, {nullable:true})
    having?: FacetValueScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FacetValueCountAggregateInput, {nullable:true})
    _count?: FacetValueCountAggregateInput;

    @Field(() => FacetValueAvgAggregateInput, {nullable:true})
    _avg?: FacetValueAvgAggregateInput;

    @Field(() => FacetValueSumAggregateInput, {nullable:true})
    _sum?: FacetValueSumAggregateInput;

    @Field(() => FacetValueMinAggregateInput, {nullable:true})
    _min?: FacetValueMinAggregateInput;

    @Field(() => FacetValueMaxAggregateInput, {nullable:true})
    _max?: FacetValueMaxAggregateInput;
}
