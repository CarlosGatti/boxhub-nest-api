import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateWithoutReferralCampaignsInput } from './defined-academy-course-create-without-referral-campaigns.input';

@InputType()
export class DefinedAcademyCourseCreateOrConnectWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCourseCreateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyCourseCreateWithoutReferralCampaignsInput)
    create!: DefinedAcademyCourseCreateWithoutReferralCampaignsInput;
}
