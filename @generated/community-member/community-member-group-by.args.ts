import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunityMemberWhereInput } from './community-member-where.input';
import { Type } from 'class-transformer';
import { CommunityMemberOrderByWithAggregationInput } from './community-member-order-by-with-aggregation.input';
import { CommunityMemberScalarFieldEnum } from './community-member-scalar-field.enum';
import { CommunityMemberScalarWhereWithAggregatesInput } from './community-member-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CommunityMemberCountAggregateInput } from './community-member-count-aggregate.input';
import { CommunityMemberAvgAggregateInput } from './community-member-avg-aggregate.input';
import { CommunityMemberSumAggregateInput } from './community-member-sum-aggregate.input';
import { CommunityMemberMinAggregateInput } from './community-member-min-aggregate.input';
import { CommunityMemberMaxAggregateInput } from './community-member-max-aggregate.input';

@ArgsType()
export class CommunityMemberGroupByArgs {

    @Field(() => CommunityMemberWhereInput, {nullable:true})
    @Type(() => CommunityMemberWhereInput)
    where?: CommunityMemberWhereInput;

    @Field(() => [CommunityMemberOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommunityMemberOrderByWithAggregationInput>;

    @Field(() => [CommunityMemberScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CommunityMemberScalarFieldEnum>;

    @Field(() => CommunityMemberScalarWhereWithAggregatesInput, {nullable:true})
    having?: CommunityMemberScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CommunityMemberCountAggregateInput, {nullable:true})
    _count?: CommunityMemberCountAggregateInput;

    @Field(() => CommunityMemberAvgAggregateInput, {nullable:true})
    _avg?: CommunityMemberAvgAggregateInput;

    @Field(() => CommunityMemberSumAggregateInput, {nullable:true})
    _sum?: CommunityMemberSumAggregateInput;

    @Field(() => CommunityMemberMinAggregateInput, {nullable:true})
    _min?: CommunityMemberMinAggregateInput;

    @Field(() => CommunityMemberMaxAggregateInput, {nullable:true})
    _max?: CommunityMemberMaxAggregateInput;
}
