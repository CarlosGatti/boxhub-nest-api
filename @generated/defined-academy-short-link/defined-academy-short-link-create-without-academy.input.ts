import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkStatus } from '../prisma/defined-academy-short-link-status.enum';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateNestedOneWithoutShortLinksInput } from '../defined-academy-resource/defined-academy-resource-create-nested-one-without-short-links.input';
import { DefinedAcademyCourseCreateNestedOneWithoutShortLinksInput } from '../defined-academy-course/defined-academy-course-create-nested-one-without-short-links.input';
import { DefinedAcademyPartnerCreateNestedOneWithoutShortLinksInput } from '../defined-academy-partner/defined-academy-partner-create-nested-one-without-short-links.input';
import { DefinedAcademyReferralCampaignCreateNestedOneWithoutShortLinksInput } from '../defined-academy-referral-campaign/defined-academy-referral-campaign-create-nested-one-without-short-links.input';
import { UserCreateNestedOneWithoutDefinedAcademyShortLinksCreatedInput } from '../user/user-create-nested-one-without-defined-academy-short-links-created.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkEventCreateNestedManyWithoutShortLinkInput } from '../defined-academy-short-link-event/defined-academy-short-link-event-create-nested-many-without-short-link.input';

@InputType()
export class DefinedAcademyShortLinkCreateWithoutAcademyInput {

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    destinationUrl!: string;

    @Field(() => DefinedAcademyShortLinkStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyShortLinkStatus;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => Int, {nullable:true})
    visitCount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyResourceCreateNestedOneWithoutShortLinksInput, {nullable:true})
    resource?: DefinedAcademyResourceCreateNestedOneWithoutShortLinksInput;

    @Field(() => DefinedAcademyCourseCreateNestedOneWithoutShortLinksInput, {nullable:true})
    course?: DefinedAcademyCourseCreateNestedOneWithoutShortLinksInput;

    @Field(() => DefinedAcademyPartnerCreateNestedOneWithoutShortLinksInput, {nullable:true})
    partner?: DefinedAcademyPartnerCreateNestedOneWithoutShortLinksInput;

    @Field(() => DefinedAcademyReferralCampaignCreateNestedOneWithoutShortLinksInput, {nullable:true})
    referralCampaign?: DefinedAcademyReferralCampaignCreateNestedOneWithoutShortLinksInput;

    @Field(() => UserCreateNestedOneWithoutDefinedAcademyShortLinksCreatedInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutDefinedAcademyShortLinksCreatedInput)
    createdBy?: UserCreateNestedOneWithoutDefinedAcademyShortLinksCreatedInput;

    @Field(() => DefinedAcademyShortLinkEventCreateNestedManyWithoutShortLinkInput, {nullable:true})
    events?: DefinedAcademyShortLinkEventCreateNestedManyWithoutShortLinkInput;
}
