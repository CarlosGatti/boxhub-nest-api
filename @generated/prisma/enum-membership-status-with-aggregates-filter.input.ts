import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipStatus } from './membership-status.enum';
import { NestedEnumMembershipStatusWithAggregatesFilter } from './nested-enum-membership-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumMembershipStatusFilter } from './nested-enum-membership-status-filter.input';

@InputType()
export class EnumMembershipStatusWithAggregatesFilter {

    @Field(() => MembershipStatus, {nullable:true})
    equals?: keyof typeof MembershipStatus;

    @Field(() => [MembershipStatus], {nullable:true})
    in?: Array<keyof typeof MembershipStatus>;

    @Field(() => [MembershipStatus], {nullable:true})
    notIn?: Array<keyof typeof MembershipStatus>;

    @Field(() => NestedEnumMembershipStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumMembershipStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumMembershipStatusFilter, {nullable:true})
    _min?: NestedEnumMembershipStatusFilter;

    @Field(() => NestedEnumMembershipStatusFilter, {nullable:true})
    _max?: NestedEnumMembershipStatusFilter;
}
