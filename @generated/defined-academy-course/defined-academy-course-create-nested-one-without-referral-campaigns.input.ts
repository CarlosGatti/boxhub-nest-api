import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateWithoutReferralCampaignsInput } from './defined-academy-course-create-without-referral-campaigns.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateOrConnectWithoutReferralCampaignsInput } from './defined-academy-course-create-or-connect-without-referral-campaigns.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';

@InputType()
export class DefinedAcademyCourseCreateNestedOneWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyCourseCreateWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateWithoutReferralCampaignsInput)
    create?: DefinedAcademyCourseCreateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyCourseCreateOrConnectWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateOrConnectWithoutReferralCampaignsInput)
    connectOrCreate?: DefinedAcademyCourseCreateOrConnectWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;
}
