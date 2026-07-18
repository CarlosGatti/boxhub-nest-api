import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyPartnerStatus } from '../prisma/defined-academy-partner-status.enum';
import { DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutPartnerInput } from '../defined-academy-short-link/defined-academy-short-link-unchecked-create-nested-many-without-partner.input';
import { DefinedAcademyReferralCampaignUncheckedCreateNestedManyWithoutPartnerInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-unchecked-create-nested-many-without-partner.input';

@InputType()
export class DefinedAcademyPartnerUncheckedCreateWithoutReferralsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => Int, {nullable:true})
    categoryId?: number;

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

    @Field(() => DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutPartnerInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutPartnerInput;

    @Field(() => DefinedAcademyReferralCampaignUncheckedCreateNestedManyWithoutPartnerInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignUncheckedCreateNestedManyWithoutPartnerInput;
}
