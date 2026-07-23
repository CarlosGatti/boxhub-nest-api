import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceType } from '../prisma/defined-academy-resource-type.enum';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCourseVisibility } from '../prisma/defined-academy-course-visibility.enum';
import { DefinedAcademyResourceStatus } from '../prisma/defined-academy-resource-status.enum';
import { DefinedAcademyCreateNestedOneWithoutResourcesInput } from '../defined-academy/defined-academy-create-nested-one-without-resources.input';
import { DefinedAcademyLessonCreateNestedOneWithoutResourcesInput } from '../defined-academy-lesson/defined-academy-lesson-create-nested-one-without-resources.input';
import { UserCreateNestedOneWithoutDefinedAcademyResourcesCreatedInput } from '../user/user-create-nested-one-without-defined-academy-resources-created.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateNestedManyWithoutResourceInput } from '../defined-academy-short-link/defined-academy-short-link-create-nested-many-without-resource.input';
import { DefinedAcademyReferralCampaignCreateNestedManyWithoutResourceInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-create-nested-many-without-resource.input';
import { DefinedAcademyCareerStageContentCreateNestedManyWithoutResourceInput } from '../defined-academy-career-stage-content/defined-academy-career-stage-content-create-nested-many-without-resource.input';

@InputType()
export class DefinedAcademyResourceCreateInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyCreateNestedOneWithoutResourcesInput, {nullable:false})
    academy!: DefinedAcademyCreateNestedOneWithoutResourcesInput;

    @Field(() => DefinedAcademyLessonCreateNestedOneWithoutResourcesInput, {nullable:true})
    lesson?: DefinedAcademyLessonCreateNestedOneWithoutResourcesInput;

    @Field(() => UserCreateNestedOneWithoutDefinedAcademyResourcesCreatedInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutDefinedAcademyResourcesCreatedInput)
    createdBy?: UserCreateNestedOneWithoutDefinedAcademyResourcesCreatedInput;

    @Field(() => DefinedAcademyShortLinkCreateNestedManyWithoutResourceInput, {nullable:true})
    shortLinks?: DefinedAcademyShortLinkCreateNestedManyWithoutResourceInput;

    @Field(() => DefinedAcademyReferralCampaignCreateNestedManyWithoutResourceInput, {nullable:true})
    referralCampaigns?: DefinedAcademyReferralCampaignCreateNestedManyWithoutResourceInput;

    @Field(() => DefinedAcademyCareerStageContentCreateNestedManyWithoutResourceInput, {nullable:true})
    careerStageLinks?: DefinedAcademyCareerStageContentCreateNestedManyWithoutResourceInput;
}
