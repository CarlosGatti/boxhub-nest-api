import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralSourceType } from '../prisma/defined-academy-referral-source-type.enum';
import { DefinedAcademyReferralCampaignStatus } from '../prisma/defined-academy-referral-campaign-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedAcademyCreateNestedOneWithoutReferralCampaignsInput } from '../defined-academy/defined-academy-create-nested-one-without-referral-campaigns.input';
import { DefinedAcademyPartnerCreateNestedOneWithoutReferralCampaignsInput } from '../defined-academy-partner/defined-academy-partner-create-nested-one-without-referral-campaigns.input';
import { DefinedAcademyCourseCreateNestedOneWithoutReferralCampaignsInput } from '../defined-academy-course/defined-academy-course-create-nested-one-without-referral-campaigns.input';
import { DefinedAcademyResourceCreateNestedOneWithoutReferralCampaignsInput } from '../defined-academy-resource/defined-academy-resource-create-nested-one-without-referral-campaigns.input';
import { DefinedAcademyShortLinkCreateNestedManyWithoutReferralCampaignInput } from '../defined-academy-short-link/defined-academy-short-link-create-nested-many-without-referral-campaign.input';
import { DefinedAcademyReferralCreateNestedManyWithoutCampaignInput } from '../defined-academy-referral/defined-academy-referral-create-nested-many-without-campaign.input';

@InputType()
export class DefinedAcademyReferralCampaignCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedAcademyReferralSourceType, {nullable:true})
    sourceType?: keyof typeof DefinedAcademyReferralSourceType;

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

    @Field(() => DefinedAcademyCreateNestedOneWithoutReferralCampaignsInput, {nullable:false})
    academy!: DefinedAcademyCreateNestedOneWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyPartnerCreateNestedOneWithoutReferralCampaignsInput, {nullable:true})
    partner?: DefinedAcademyPartnerCreateNestedOneWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyCourseCreateNestedOneWithoutReferralCampaignsInput, {nullable:true})
    course?: DefinedAcademyCourseCreateNestedOneWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyResourceCreateNestedOneWithoutReferralCampaignsInput, {nullable:true})
    resource?: DefinedAcademyResourceCreateNestedOneWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyShortLinkCreateNestedManyWithoutReferralCampaignInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkCreateNestedManyWithoutReferralCampaignInput;

    @Field(() => DefinedAcademyReferralCreateNestedManyWithoutCampaignInput, {nullable:true})
    referrals?: DefinedAcademyReferralCreateNestedManyWithoutCampaignInput;
}
