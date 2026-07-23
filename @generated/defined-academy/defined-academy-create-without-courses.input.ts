import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyStatus } from '../prisma/defined-academy-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { AppCreateNestedOneWithoutDefinedAcademiesInput } from '../app/app-create-nested-one-without-defined-academies.input';
import { DefinedAcademyResourceCreateNestedManyWithoutAcademyInput } from '../defined-academy-resource/defined-academy-resource-create-nested-many-without-academy.input';
import { DefinedAcademyPartnerCreateNestedManyWithoutAcademyInput } from '../defined-academy-partner/defined-academy-partner-create-nested-many-without-academy.input';
import { DefinedAcademyPartnerCategoryCreateNestedManyWithoutAcademyInput } from '../defined-academy-partner-category/defined-academy-partner-category-create-nested-many-without-academy.input';
import { DefinedAcademyShortLinkCreateNestedManyWithoutAcademyInput } from '../defined-academy-short-link/defined-academy-short-link-create-nested-many-without-academy.input';
import { DefinedAcademyReferralCampaignCreateNestedManyWithoutAcademyInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-create-nested-many-without-academy.input';
import { DefinedAcademyReferralCreateNestedManyWithoutAcademyInput } from '../defined-academy-referral/defined-academy-referral-create-nested-many-without-academy.input';
import { DefinedAcademyCareerJourneyCreateNestedOneWithoutAcademyInput } from '../defined-academy-career-journey/defined-academy-career-journey-create-nested-one-without-academy.input';
import { DefinedAcademyUserCareerProfileCreateNestedManyWithoutAcademyInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-create-nested-many-without-academy.input';

@InputType()
export class DefinedAcademyCreateWithoutCoursesInput {

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

    @Field(() => AppCreateNestedOneWithoutDefinedAcademiesInput, {nullable:true})
    app?: AppCreateNestedOneWithoutDefinedAcademiesInput;

    @Field(() => DefinedAcademyResourceCreateNestedManyWithoutAcademyInput, {nullable:true})
    resources?: DefinedAcademyResourceCreateNestedManyWithoutAcademyInput;

    @Field(() => DefinedAcademyPartnerCreateNestedManyWithoutAcademyInput, {nullable:true})
    partners?: DefinedAcademyPartnerCreateNestedManyWithoutAcademyInput;

    @Field(() => DefinedAcademyPartnerCategoryCreateNestedManyWithoutAcademyInput, {nullable:true})
    partnerCategories?: DefinedAcademyPartnerCategoryCreateNestedManyWithoutAcademyInput;

    @Field(() => DefinedAcademyShortLinkCreateNestedManyWithoutAcademyInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkCreateNestedManyWithoutAcademyInput;

    @Field(() => DefinedAcademyReferralCampaignCreateNestedManyWithoutAcademyInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignCreateNestedManyWithoutAcademyInput;

    @Field(() => DefinedAcademyReferralCreateNestedManyWithoutAcademyInput, {nullable:true})
    referrals?: DefinedAcademyReferralCreateNestedManyWithoutAcademyInput;

    @Field(() => DefinedAcademyCareerJourneyCreateNestedOneWithoutAcademyInput, {nullable:true})
    careerJourney?: DefinedAcademyCareerJourneyCreateNestedOneWithoutAcademyInput;

    @Field(() => DefinedAcademyUserCareerProfileCreateNestedManyWithoutAcademyInput, {nullable:true})
    careerProfiles?: DefinedAcademyUserCareerProfileCreateNestedManyWithoutAcademyInput;
}
