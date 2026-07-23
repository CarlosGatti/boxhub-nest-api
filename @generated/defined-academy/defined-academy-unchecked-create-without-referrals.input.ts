import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyStatus } from '../prisma/defined-academy-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedAcademyCourseUncheckedCreateNestedManyWithoutAcademyInput } from '../defined-academy-course/defined-academy-course-unchecked-create-nested-many-without-academy.input';
import { DefinedAcademyResourceUncheckedCreateNestedManyWithoutAcademyInput } from '../defined-academy-resource/defined-academy-resource-unchecked-create-nested-many-without-academy.input';
import { DefinedAcademyPartnerUncheckedCreateNestedManyWithoutAcademyInput } from '../defined-academy-partner/defined-academy-partner-unchecked-create-nested-many-without-academy.input';
import { DefinedAcademyPartnerCategoryUncheckedCreateNestedManyWithoutAcademyInput } from '../defined-academy-partner-category/defined-academy-partner-category-unchecked-create-nested-many-without-academy.input';
import { DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutAcademyInput } from '../defined-academy-short-link/defined-academy-short-link-unchecked-create-nested-many-without-academy.input';
import { DefinedAcademyReferralCampaignUncheckedCreateNestedManyWithoutAcademyInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-unchecked-create-nested-many-without-academy.input';
import { DefinedAcademyCareerJourneyUncheckedCreateNestedOneWithoutAcademyInput } from '../defined-academy-career-journey/defined-academy-career-journey-unchecked-create-nested-one-without-academy.input';
import { DefinedAcademyUserCareerProfileUncheckedCreateNestedManyWithoutAcademyInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-unchecked-create-nested-many-without-academy.input';

@InputType()
export class DefinedAcademyUncheckedCreateWithoutReferralsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    appId?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedAcademyStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyStatus;

    @Field(() => String, {nullable:true})
    logoUrl?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    settings?: any;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    archivedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyCourseUncheckedCreateNestedManyWithoutAcademyInput, {nullable:true})
    courses?: DefinedAcademyCourseUncheckedCreateNestedManyWithoutAcademyInput;

    @Field(() => DefinedAcademyResourceUncheckedCreateNestedManyWithoutAcademyInput, {nullable:true})
    resources?: DefinedAcademyResourceUncheckedCreateNestedManyWithoutAcademyInput;

    @Field(() => DefinedAcademyPartnerUncheckedCreateNestedManyWithoutAcademyInput, {nullable:true})
    partners?: DefinedAcademyPartnerUncheckedCreateNestedManyWithoutAcademyInput;

    @Field(() => DefinedAcademyPartnerCategoryUncheckedCreateNestedManyWithoutAcademyInput, {nullable:true})
    partnerCategories?: DefinedAcademyPartnerCategoryUncheckedCreateNestedManyWithoutAcademyInput;

    @Field(() => DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutAcademyInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutAcademyInput;

    @Field(() => DefinedAcademyReferralCampaignUncheckedCreateNestedManyWithoutAcademyInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignUncheckedCreateNestedManyWithoutAcademyInput;

    @Field(() => DefinedAcademyCareerJourneyUncheckedCreateNestedOneWithoutAcademyInput, {nullable:true})
    careerJourney?: DefinedAcademyCareerJourneyUncheckedCreateNestedOneWithoutAcademyInput;

    @Field(() => DefinedAcademyUserCareerProfileUncheckedCreateNestedManyWithoutAcademyInput, {nullable:true})
    careerProfiles?: DefinedAcademyUserCareerProfileUncheckedCreateNestedManyWithoutAcademyInput;
}
