import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyReferralSourceType } from '../prisma/defined-academy-referral-source-type.enum';
import { DefinedAcademyReferralCampaignStatus } from '../prisma/defined-academy-referral-campaign-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutReferralCampaignInput } from '../defined-academy-short-link/defined-academy-short-link-unchecked-create-nested-many-without-referral-campaign.input';
import { DefinedAcademyReferralUncheckedCreateNestedManyWithoutCampaignInput } from '../defined-academy-referral/defined-academy-referral-unchecked-create-nested-many-without-campaign.input';

@InputType()
export class DefinedAcademyReferralCampaignUncheckedCreateWithoutAcademyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedAcademyReferralSourceType, {nullable:true})
    sourceType?: keyof typeof DefinedAcademyReferralSourceType;

    @Field(() => Int, {nullable:true})
    partnerId?: number;

    @Field(() => Int, {nullable:true})
    courseId?: number;

    @Field(() => Int, {nullable:true})
    resourceId?: number;

    @Field(() => DefinedAcademyReferralCampaignStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyReferralCampaignStatus;

    @Field(() => Date, {nullable:true})
    startsAt?: Date | string;

    @Field(() => Date, {nullable:true})
    endsAt?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutReferralCampaignInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutReferralCampaignInput;

    @Field(() => DefinedAcademyReferralUncheckedCreateNestedManyWithoutCampaignInput, {nullable:true})
    referrals?: DefinedAcademyReferralUncheckedCreateNestedManyWithoutCampaignInput;
}
