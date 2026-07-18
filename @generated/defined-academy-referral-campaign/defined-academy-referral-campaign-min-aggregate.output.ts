import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyReferralSourceType } from '../prisma/defined-academy-referral-source-type.enum';
import { DefinedAcademyReferralCampaignStatus } from '../prisma/defined-academy-referral-campaign-status.enum';

@ObjectType()
export class DefinedAcademyReferralCampaignMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    academyId?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedAcademyReferralSourceType, {nullable:true})
    sourceType?: keyof typeof DefinedAcademyReferralSourceType;

    @Field(() => Int, {nullable:true})
    partnerId?: number;

    @Field(() => Int, {nullable:true})
    courseId?: number;

    @Field(() => Int, {nullable:true})
    resourceId?: number;

    @Field(() => DefinedAcademyReferralCampaignStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyReferralCampaignStatus;

    @Field(() => Date, {nullable:true})
    startsAt?: Date | string;

    @Field(() => Date, {nullable:true})
    endsAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
