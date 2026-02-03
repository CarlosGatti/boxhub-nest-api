import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsHouseholdCountAggregate } from './home-ops-household-count-aggregate.output';
import { HomeOpsHouseholdAvgAggregate } from './home-ops-household-avg-aggregate.output';
import { HomeOpsHouseholdSumAggregate } from './home-ops-household-sum-aggregate.output';
import { HomeOpsHouseholdMinAggregate } from './home-ops-household-min-aggregate.output';
import { HomeOpsHouseholdMaxAggregate } from './home-ops-household-max-aggregate.output';

@ObjectType()
export class HomeOpsHouseholdGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    ownerId!: number;

    @Field(() => Int, {nullable:true})
    appId?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => HomeOpsHouseholdCountAggregate, {nullable:true})
    _count?: HomeOpsHouseholdCountAggregate;

    @Field(() => HomeOpsHouseholdAvgAggregate, {nullable:true})
    _avg?: HomeOpsHouseholdAvgAggregate;

    @Field(() => HomeOpsHouseholdSumAggregate, {nullable:true})
    _sum?: HomeOpsHouseholdSumAggregate;

    @Field(() => HomeOpsHouseholdMinAggregate, {nullable:true})
    _min?: HomeOpsHouseholdMinAggregate;

    @Field(() => HomeOpsHouseholdMaxAggregate, {nullable:true})
    _max?: HomeOpsHouseholdMaxAggregate;
}
