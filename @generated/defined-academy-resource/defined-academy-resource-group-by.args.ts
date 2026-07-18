import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceOrderByWithAggregationInput } from './defined-academy-resource-order-by-with-aggregation.input';
import { DefinedAcademyResourceScalarFieldEnum } from './defined-academy-resource-scalar-field.enum';
import { DefinedAcademyResourceScalarWhereWithAggregatesInput } from './defined-academy-resource-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyResourceCountAggregateInput } from './defined-academy-resource-count-aggregate.input';
import { DefinedAcademyResourceAvgAggregateInput } from './defined-academy-resource-avg-aggregate.input';
import { DefinedAcademyResourceSumAggregateInput } from './defined-academy-resource-sum-aggregate.input';
import { DefinedAcademyResourceMinAggregateInput } from './defined-academy-resource-min-aggregate.input';
import { DefinedAcademyResourceMaxAggregateInput } from './defined-academy-resource-max-aggregate.input';

@ArgsType()
export class DefinedAcademyResourceGroupByArgs {

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    where?: DefinedAcademyResourceWhereInput;

    @Field(() => [DefinedAcademyResourceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyResourceOrderByWithAggregationInput>;

    @Field(() => [DefinedAcademyResourceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedAcademyResourceScalarFieldEnum>;

    @Field(() => DefinedAcademyResourceScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedAcademyResourceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyResourceCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyResourceCountAggregateInput;

    @Field(() => DefinedAcademyResourceAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyResourceAvgAggregateInput;

    @Field(() => DefinedAcademyResourceSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyResourceSumAggregateInput;

    @Field(() => DefinedAcademyResourceMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyResourceMinAggregateInput;

    @Field(() => DefinedAcademyResourceMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyResourceMaxAggregateInput;
}
