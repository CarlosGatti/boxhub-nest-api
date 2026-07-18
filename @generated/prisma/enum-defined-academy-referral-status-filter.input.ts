import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralStatus } from './defined-academy-referral-status.enum';
import { NestedEnumDefinedAcademyReferralStatusFilter } from './nested-enum-defined-academy-referral-status-filter.input';

@InputType()
export class EnumDefinedAcademyReferralStatusFilter {

    @Field(() => DefinedAcademyReferralStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyReferralStatus;

    @Field(() => [DefinedAcademyReferralStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyReferralStatus>;

    @Field(() => [DefinedAcademyReferralStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyReferralStatus>;

    @Field(() => NestedEnumDefinedAcademyReferralStatusFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyReferralStatusFilter;
}
