import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingSectionWhereInput } from './defined-branding-section-where.input';
import { Type } from 'class-transformer';
import { DefinedBrandingSectionOrderByWithAggregationInput } from './defined-branding-section-order-by-with-aggregation.input';
import { DefinedBrandingSectionScalarFieldEnum } from './defined-branding-section-scalar-field.enum';
import { DefinedBrandingSectionScalarWhereWithAggregatesInput } from './defined-branding-section-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedBrandingSectionCountAggregateInput } from './defined-branding-section-count-aggregate.input';
import { DefinedBrandingSectionAvgAggregateInput } from './defined-branding-section-avg-aggregate.input';
import { DefinedBrandingSectionSumAggregateInput } from './defined-branding-section-sum-aggregate.input';
import { DefinedBrandingSectionMinAggregateInput } from './defined-branding-section-min-aggregate.input';
import { DefinedBrandingSectionMaxAggregateInput } from './defined-branding-section-max-aggregate.input';

@ArgsType()
export class DefinedBrandingSectionGroupByArgs {

    @Field(() => DefinedBrandingSectionWhereInput, {nullable:true})
    @Type(() => DefinedBrandingSectionWhereInput)
    where?: DefinedBrandingSectionWhereInput;

    @Field(() => [DefinedBrandingSectionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedBrandingSectionOrderByWithAggregationInput>;

    @Field(() => [DefinedBrandingSectionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedBrandingSectionScalarFieldEnum>;

    @Field(() => DefinedBrandingSectionScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedBrandingSectionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedBrandingSectionCountAggregateInput, {nullable:true})
    _count?: DefinedBrandingSectionCountAggregateInput;

    @Field(() => DefinedBrandingSectionAvgAggregateInput, {nullable:true})
    _avg?: DefinedBrandingSectionAvgAggregateInput;

    @Field(() => DefinedBrandingSectionSumAggregateInput, {nullable:true})
    _sum?: DefinedBrandingSectionSumAggregateInput;

    @Field(() => DefinedBrandingSectionMinAggregateInput, {nullable:true})
    _min?: DefinedBrandingSectionMinAggregateInput;

    @Field(() => DefinedBrandingSectionMaxAggregateInput, {nullable:true})
    _max?: DefinedBrandingSectionMaxAggregateInput;
}
