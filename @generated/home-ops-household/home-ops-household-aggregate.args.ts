import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdOrderByWithRelationInput } from './home-ops-household-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsHouseholdCountAggregateInput } from './home-ops-household-count-aggregate.input';
import { HomeOpsHouseholdAvgAggregateInput } from './home-ops-household-avg-aggregate.input';
import { HomeOpsHouseholdSumAggregateInput } from './home-ops-household-sum-aggregate.input';
import { HomeOpsHouseholdMinAggregateInput } from './home-ops-household-min-aggregate.input';
import { HomeOpsHouseholdMaxAggregateInput } from './home-ops-household-max-aggregate.input';

@ArgsType()
export class HomeOpsHouseholdAggregateArgs {

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereInput)
    where?: HomeOpsHouseholdWhereInput;

    @Field(() => [HomeOpsHouseholdOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeOpsHouseholdOrderByWithRelationInput>;

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

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
