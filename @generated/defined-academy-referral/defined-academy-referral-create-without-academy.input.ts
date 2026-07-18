import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralStatus } from '../prisma/defined-academy-referral-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedAcademyReferralCampaignCreateNestedOneWithoutReferralsInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-create-nested-one-without-referrals.input';
import { UserCreateNestedOneWithoutDefinedAcademyReferralsAsReferrerInput } from '../user/user-create-nested-one-without-defined-academy-referrals-as-referrer.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutDefinedAcademyReferralsAsReferredInput } from '../user/user-create-nested-one-without-defined-academy-referrals-as-referred.input';
import { DefinedAcademyPartnerCreateNestedOneWithoutReferralsInput } from '../defined-academy-partner/defined-academy-partner-create-nested-one-without-referrals.input';

@InputType()
export class DefinedAcademyReferralCreateWithoutAcademyInput {

    @Field(() => String, {nullable:false})
    referralCode!: string;

    @Field(() => DefinedAcademyReferralStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyReferralStatus;

    @Field(() => Date, {nullable:true})
    firstVisitedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    registeredAt?: Date | string;

    @Field(() => Date, {nullable:true})
    enrolledAt?: Date | string;

    @Field(() => Date, {nullable:true})
    attributionExpiresAt?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyReferralCampaignCreateNestedOneWithoutReferralsInput, {nullable:true})
    campaign?: DefinedAcademyReferralCampaignCreateNestedOneWithoutReferralsInput;

    @Field(() => UserCreateNestedOneWithoutDefinedAcademyReferralsAsReferrerInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutDefinedAcademyReferralsAsReferrerInput)
    referrerUser?: UserCreateNestedOneWithoutDefinedAcademyReferralsAsReferrerInput;

    @Field(() => UserCreateNestedOneWithoutDefinedAcademyReferralsAsReferredInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutDefinedAcademyReferralsAsReferredInput)
    referredUser?: UserCreateNestedOneWithoutDefinedAcademyReferralsAsReferredInput;

    @Field(() => DefinedAcademyPartnerCreateNestedOneWithoutReferralsInput, {nullable:true})
    partner?: DefinedAcademyPartnerCreateNestedOneWithoutReferralsInput;
}
