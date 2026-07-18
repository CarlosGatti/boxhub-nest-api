import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerStatus } from '../prisma/defined-academy-partner-status.enum';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCreateNestedOneWithoutPartnersInput } from '../defined-academy/defined-academy-create-nested-one-without-partners.input';
import { DefinedAcademyShortLinkCreateNestedManyWithoutPartnerInput } from '../defined-academy-short-link/defined-academy-short-link-create-nested-many-without-partner.input';
import { DefinedAcademyReferralCampaignCreateNestedManyWithoutPartnerInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-create-nested-many-without-partner.input';
import { DefinedAcademyReferralCreateNestedManyWithoutPartnerInput } from '../defined-academy-referral/defined-academy-referral-create-nested-many-without-partner.input';

@InputType()
export class DefinedAcademyPartnerCreateWithoutCategoryInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    websiteUrl?: string;

    @Field(() => String, {nullable:true})
    contactUrl?: string;

    @Field(() => String, {nullable:true})
    logoUrl?: string;

    @Field(() => String, {nullable:true})
    location?: string;

    @Field(() => DefinedAcademyPartnerStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyPartnerStatus;

    @Field(() => Boolean, {nullable:true})
    featured?: boolean;

    @Field(() => Int, {nullable:true})
    sortOrder?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyCreateNestedOneWithoutPartnersInput, {nullable:false})
    academy!: DefinedAcademyCreateNestedOneWithoutPartnersInput;

    @Field(() => DefinedAcademyShortLinkCreateNestedManyWithoutPartnerInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkCreateNestedManyWithoutPartnerInput;

    @Field(() => DefinedAcademyReferralCampaignCreateNestedManyWithoutPartnerInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignCreateNestedManyWithoutPartnerInput;

    @Field(() => DefinedAcademyReferralCreateNestedManyWithoutPartnerInput, {nullable:true})
    referrals?: DefinedAcademyReferralCreateNestedManyWithoutPartnerInput;
}
