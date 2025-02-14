import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { CommunityPlanCountAggregate } from './community-plan-count-aggregate.output';
import { CommunityPlanAvgAggregate } from './community-plan-avg-aggregate.output';
import { CommunityPlanSumAggregate } from './community-plan-sum-aggregate.output';
import { CommunityPlanMinAggregate } from './community-plan-min-aggregate.output';
import { CommunityPlanMaxAggregate } from './community-plan-max-aggregate.output';

@ObjectType()
export class CommunityPlanGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Int, {nullable:true})
    communityId?: number;

    @Field(() => CommunityPlanCountAggregate, {nullable:true})
    _count?: CommunityPlanCountAggregate;

    @Field(() => CommunityPlanAvgAggregate, {nullable:true})
    _avg?: CommunityPlanAvgAggregate;

    @Field(() => CommunityPlanSumAggregate, {nullable:true})
    _sum?: CommunityPlanSumAggregate;

    @Field(() => CommunityPlanMinAggregate, {nullable:true})
    _min?: CommunityPlanMinAggregate;

    @Field(() => CommunityPlanMaxAggregate, {nullable:true})
    _max?: CommunityPlanMaxAggregate;
}
