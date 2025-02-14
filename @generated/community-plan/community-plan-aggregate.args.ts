import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityPlanWhereInput } from './community-plan-where.input';
import { Type } from 'class-transformer';
import { CommunityPlanOrderByWithRelationInput } from './community-plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CommunityPlanWhereUniqueInput } from './community-plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommunityPlanCountAggregateInput } from './community-plan-count-aggregate.input';
import { CommunityPlanAvgAggregateInput } from './community-plan-avg-aggregate.input';
import { CommunityPlanSumAggregateInput } from './community-plan-sum-aggregate.input';
import { CommunityPlanMinAggregateInput } from './community-plan-min-aggregate.input';
import { CommunityPlanMaxAggregateInput } from './community-plan-max-aggregate.input';

@ArgsType()
export class CommunityPlanAggregateArgs {

    @Field(() => CommunityPlanWhereInput, {nullable:true})
    @Type(() => CommunityPlanWhereInput)
    where?: CommunityPlanWhereInput;

    @Field(() => [CommunityPlanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommunityPlanOrderByWithRelationInput>;

    @Field(() => CommunityPlanWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommunityPlanWhereUniqueInput, 'id'>;

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
