import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HomeOpsHouseholdCountAggregate } from './home-ops-household-count-aggregate.output';
import { HomeOpsHouseholdAvgAggregate } from './home-ops-household-avg-aggregate.output';
import { HomeOpsHouseholdSumAggregate } from './home-ops-household-sum-aggregate.output';
import { HomeOpsHouseholdMinAggregate } from './home-ops-household-min-aggregate.output';
import { HomeOpsHouseholdMaxAggregate } from './home-ops-household-max-aggregate.output';

@ObjectType()
export class AggregateHomeOpsHousehold {

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
