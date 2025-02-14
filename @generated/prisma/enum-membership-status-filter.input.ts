import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MembershipStatus } from './membership-status.enum';
import { NestedEnumMembershipStatusFilter } from './nested-enum-membership-status-filter.input';

@InputType()
export class EnumMembershipStatusFilter {

    @Field(() => MembershipStatus, {nullable:true})
    equals?: keyof typeof MembershipStatus;

    @Field(() => [MembershipStatus], {nullable:true})
    in?: Array<keyof typeof MembershipStatus>;

    @Field(() => [MembershipStatus], {nullable:true})
    notIn?: Array<keyof typeof MembershipStatus>;

    @Field(() => NestedEnumMembershipStatusFilter, {nullable:true})
    not?: NestedEnumMembershipStatusFilter;
}
