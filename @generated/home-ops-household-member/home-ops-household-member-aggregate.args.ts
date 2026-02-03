import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberWhereInput } from './home-ops-household-member-where.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdMemberOrderByWithRelationInput } from './home-ops-household-member-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdMemberWhereUniqueInput } from './home-ops-household-member-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberCountAggregateInput } from './home-ops-household-member-count-aggregate.input';
import { HomeOpsHouseholdMemberAvgAggregateInput } from './home-ops-household-member-avg-aggregate.input';
import { HomeOpsHouseholdMemberSumAggregateInput } from './home-ops-household-member-sum-aggregate.input';
import { HomeOpsHouseholdMemberMinAggregateInput } from './home-ops-household-member-min-aggregate.input';
import { HomeOpsHouseholdMemberMaxAggregateInput } from './home-ops-household-member-max-aggregate.input';

@ArgsType()
export class HomeOpsHouseholdMemberAggregateArgs {

    @Field(() => HomeOpsHouseholdMemberWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdMemberWhereInput)
    where?: HomeOpsHouseholdMemberWhereInput;

    @Field(() => [HomeOpsHouseholdMemberOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeOpsHouseholdMemberOrderByWithRelationInput>;

    @Field(() => HomeOpsHouseholdMemberWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>;

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
