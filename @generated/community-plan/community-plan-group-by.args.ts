import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityPlanWhereInput } from './community-plan-where.input';
import { Type } from 'class-transformer';
import { CommunityPlanOrderByWithAggregationInput } from './community-plan-order-by-with-aggregation.input';
import { CommunityPlanScalarFieldEnum } from './community-plan-scalar-field.enum';
import { CommunityPlanScalarWhereWithAggregatesInput } from './community-plan-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CommunityPlanCountAggregateInput } from './community-plan-count-aggregate.input';
import { CommunityPlanAvgAggregateInput } from './community-plan-avg-aggregate.input';
import { CommunityPlanSumAggregateInput } from './community-plan-sum-aggregate.input';
import { CommunityPlanMinAggregateInput } from './community-plan-min-aggregate.input';
import { CommunityPlanMaxAggregateInput } from './community-plan-max-aggregate.input';

@ArgsType()
export class CommunityPlanGroupByArgs {

    @Field(() => CommunityPlanWhereInput, {nullable:true})
    @Type(() => CommunityPlanWhereInput)
    where?: CommunityPlanWhereInput;

    @Field(() => [CommunityPlanOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommunityPlanOrderByWithAggregationInput>;

    @Field(() => [CommunityPlanScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CommunityPlanScalarFieldEnum>;

    @Field(() => CommunityPlanScalarWhereWithAggregatesInput, {nullable:true})
    having?: CommunityPlanScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CommunityPlanCountAggregateInput, {nullable:true})
    _count?: CommunityPlanCountAggregateInput;

    @Field(() => CommunityPlanAvgAggregateInput, {nullable:true})
    _avg?: CommunityPlanAvgAggregateInput;

    @Field(() => CommunityPlanSumAggregateInput, {nullable:true})
    _sum?: CommunityPlanSumAggregateInput;

    @Field(() => CommunityPlanMinAggregateInput, {nullable:true})
    _min?: CommunityPlanMinAggregateInput;

    @Field(() => CommunityPlanMaxAggregateInput, {nullable:true})
    _max?: CommunityPlanMaxAggregateInput;
}
