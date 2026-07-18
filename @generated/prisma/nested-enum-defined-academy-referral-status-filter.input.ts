import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralStatus } from './defined-academy-referral-status.enum';

@InputType()
export class NestedEnumDefinedAcademyReferralStatusFilter {

    @Field(() => DefinedAcademyReferralStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyReferralStatus;

    @Field(() => [DefinedAcademyReferralStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyReferralStatus>;

    @Field(() => [DefinedAcademyReferralStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyReferralStatus>;

    @Field(() => NestedEnumDefinedAcademyReferralStatusFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyReferralStatusFilter;
}
