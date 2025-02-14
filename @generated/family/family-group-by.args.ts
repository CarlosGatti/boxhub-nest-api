import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FamilyWhereInput } from './family-where.input';
import { Type } from 'class-transformer';
import { FamilyOrderByWithAggregationInput } from './family-order-by-with-aggregation.input';
import { FamilyScalarFieldEnum } from './family-scalar-field.enum';
import { FamilyScalarWhereWithAggregatesInput } from './family-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FamilyCountAggregateInput } from './family-count-aggregate.input';
import { FamilyAvgAggregateInput } from './family-avg-aggregate.input';
import { FamilySumAggregateInput } from './family-sum-aggregate.input';
import { FamilyMinAggregateInput } from './family-min-aggregate.input';
import { FamilyMaxAggregateInput } from './family-max-aggregate.input';

@ArgsType()
export class FamilyGroupByArgs {

    @Field(() => FamilyWhereInput, {nullable:true})
    @Type(() => FamilyWhereInput)
    where?: FamilyWhereInput;

    @Field(() => [FamilyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FamilyOrderByWithAggregationInput>;

    @Field(() => [FamilyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof FamilyScalarFieldEnum>;

    @Field(() => FamilyScalarWhereWithAggregatesInput, {nullable:true})
    having?: FamilyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FamilyCountAggregateInput, {nullable:true})
    _count?: FamilyCountAggregateInput;

    @Field(() => FamilyAvgAggregateInput, {nullable:true})
    _avg?: FamilyAvgAggregateInput;

    @Field(() => FamilySumAggregateInput, {nullable:true})
    _sum?: FamilySumAggregateInput;

    @Field(() => FamilyMinAggregateInput, {nullable:true})
    _min?: FamilyMinAggregateInput;

    @Field(() => FamilyMaxAggregateInput, {nullable:true})
    _max?: FamilyMaxAggregateInput;
}
