import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberWhereInput } from './home-ops-household-member-where.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdMemberOrderByWithAggregationInput } from './home-ops-household-member-order-by-with-aggregation.input';
import { HomeOpsHouseholdMemberScalarFieldEnum } from './home-ops-household-member-scalar-field.enum';
import { HomeOpsHouseholdMemberScalarWhereWithAggregatesInput } from './home-ops-household-member-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberCountAggregateInput } from './home-ops-household-member-count-aggregate.input';
import { HomeOpsHouseholdMemberAvgAggregateInput } from './home-ops-household-member-avg-aggregate.input';
import { HomeOpsHouseholdMemberSumAggregateInput } from './home-ops-household-member-sum-aggregate.input';
import { HomeOpsHouseholdMemberMinAggregateInput } from './home-ops-household-member-min-aggregate.input';
import { HomeOpsHouseholdMemberMaxAggregateInput } from './home-ops-household-member-max-aggregate.input';

@ArgsType()
export class HomeOpsHouseholdMemberGroupByArgs {

    @Field(() => HomeOpsHouseholdMemberWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdMemberWhereInput)
    where?: HomeOpsHouseholdMemberWhereInput;

    @Field(() => [HomeOpsHouseholdMemberOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<HomeOpsHouseholdMemberOrderByWithAggregationInput>;

    @Field(() => [HomeOpsHouseholdMemberScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof HomeOpsHouseholdMemberScalarFieldEnum>;

    @Field(() => HomeOpsHouseholdMemberScalarWhereWithAggregatesInput, {nullable:true})
    having?: HomeOpsHouseholdMemberScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => HomeOpsHouseholdMemberCountAggregateInput, {nullable:true})
    _count?: HomeOpsHouseholdMemberCountAggregateInput;

    @Field(() => HomeOpsHouseholdMemberAvgAggregateInput, {nullable:true})
    _avg?: HomeOpsHouseholdMemberAvgAggregateInput;

    @Field(() => HomeOpsHouseholdMemberSumAggregateInput, {nullable:true})
    _sum?: HomeOpsHouseholdMemberSumAggregateInput;

    @Field(() => HomeOpsHouseholdMemberMinAggregateInput, {nullable:true})
    _min?: HomeOpsHouseholdMemberMinAggregateInput;

    @Field(() => HomeOpsHouseholdMemberMaxAggregateInput, {nullable:true})
    _max?: HomeOpsHouseholdMemberMaxAggregateInput;
}
