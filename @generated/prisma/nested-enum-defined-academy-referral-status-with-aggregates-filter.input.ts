import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralStatus } from './defined-academy-referral-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyReferralStatusFilter } from './nested-enum-defined-academy-referral-status-filter.input';

@InputType()
export class NestedEnumDefinedAcademyReferralStatusWithAggregatesFilter {

    @Field(() => DefinedAcademyReferralStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyReferralStatus;

    @Field(() => [DefinedAcademyReferralStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyReferralStatus>;

    @Field(() => [DefinedAcademyReferralStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyReferralStatus>;

    @Field(() => NestedEnumDefinedAcademyReferralStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyReferralStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyReferralStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyReferralStatusFilter;

    @Field(() => NestedEnumDefinedAcademyReferralStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyReferralStatusFilter;
}
