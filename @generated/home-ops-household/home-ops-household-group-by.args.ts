import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdOrderByWithAggregationInput } from './home-ops-household-order-by-with-aggregation.input';
import { HomeOpsHouseholdScalarFieldEnum } from './home-ops-household-scalar-field.enum';
import { HomeOpsHouseholdScalarWhereWithAggregatesInput } from './home-ops-household-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsHouseholdCountAggregateInput } from './home-ops-household-count-aggregate.input';
import { HomeOpsHouseholdAvgAggregateInput } from './home-ops-household-avg-aggregate.input';
import { HomeOpsHouseholdSumAggregateInput } from './home-ops-household-sum-aggregate.input';
import { HomeOpsHouseholdMinAggregateInput } from './home-ops-household-min-aggregate.input';
import { HomeOpsHouseholdMaxAggregateInput } from './home-ops-household-max-aggregate.input';

@ArgsType()
export class HomeOpsHouseholdGroupByArgs {

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereInput)
    where?: HomeOpsHouseholdWhereInput;

    @Field(() => [HomeOpsHouseholdOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HomeOpsHouseholdOrderByWithAggregationInput>;

    @Field(() => [HomeOpsHouseholdScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HomeOpsHouseholdScalarFieldEnum>;

    @Field(() => HomeOpsHouseholdScalarWhereWithAggregatesInput, {nullable:true})
    having?: HomeOpsHouseholdScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HomeOpsHouseholdCountAggregateInput, {nullable:true})
    _count?: HomeOpsHouseholdCountAggregateInput;

    @Field(() => HomeOpsHouseholdAvgAggregateInput, {nullable:true})
    _avg?: HomeOpsHouseholdAvgAggregateInput;

    @Field(() => HomeOpsHouseholdSumAggregateInput, {nullable:true})
    _sum?: HomeOpsHouseholdSumAggregateInput;

    @Field(() => HomeOpsHouseholdMinAggregateInput, {nullable:true})
    _min?: HomeOpsHouseholdMinAggregateInput;

    @Field(() => HomeOpsHouseholdMaxAggregateInput, {nullable:true})
    _max?: HomeOpsHouseholdMaxAggregateInput;
}
