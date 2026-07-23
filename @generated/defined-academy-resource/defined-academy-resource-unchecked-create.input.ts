import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyResourceType } from '../prisma/defined-academy-resource-type.enum';
import { DefinedAcademyCourseVisibility } from '../prisma/defined-academy-course-visibility.enum';
import { DefinedAcademyResourceStatus } from '../prisma/defined-academy-resource-status.enum';
import { DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutResourceInput } from '../defined-academy-short-link/defined-academy-short-link-unchecked-create-nested-many-without-resource.input';
import { DefinedAcademyReferralCampaignUncheckedCreateNestedManyWithoutResourceInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-unchecked-create-nested-many-without-resource.input';
import { DefinedAcademyCareerStageContentUncheckedCreateNestedManyWithoutResourceInput } from '../defined-academy-career-stage-content/defined-academy-career-stage-content-unchecked-create-nested-many-without-resource.input';

@InputType()
export class DefinedAcademyResourceUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => Int, {nullable:true})
    lessonId?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedAcademyResourceType, {nullable:false})
    type!: keyof typeof DefinedAcademyResourceType;

    @Field(() => String, {nullable:true})
    fileUrl?: string;

    @Field(() => String, {nullable:true})
    externalUrl?: string;

    @Field(() => String, {nullable:true})
    textContent?: string;

    @Field(() => String, {nullable:true})
    mimeType?: string;

    @Field(() => String, {nullable:true})
    fileName?: string;

    @Field(() => Int, {nullable:true})
    fileSize?: number;

    @Field(() => Int, {nullable:true})
    sortOrder?: number;

    @Field(() => DefinedAcademyCourseVisibility, {nullable:true})
    visibility?: keyof typeof DefinedAcademyCourseVisibility;

    @Field(() => DefinedAcademyResourceStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyResourceStatus;

    @Field(() => Boolean, {nullable:true})
    downloadable?: boolean;

    @Field(() => Int, {nullable:true})
    createdById?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutResourceInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutResourceInput;

    @Field(() => DefinedAcademyReferralCampaignUncheckedCreateNestedManyWithoutResourceInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignUncheckedCreateNestedManyWithoutResourceInput;

    @Field(() => DefinedAcademyCareerStageContentUncheckedCreateNestedManyWithoutResourceInput, {nullable:true})
    careerStageLinks?: DefinedAcademyCareerStageContentUncheckedCreateNestedManyWithoutResourceInput;
}
