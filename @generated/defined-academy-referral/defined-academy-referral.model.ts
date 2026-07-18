import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyReferralStatus } from '../prisma/defined-academy-referral-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedAcademy } from '../defined-academy/defined-academy.model';
import { DefinedAcademyReferralCampaign } from '../defined-academy-referral-campaign/defined-academy-referral-campaign.model';
import { User } from '../user/user.model';
import { DefinedAcademyPartner } from '../defined-academy-partner/defined-academy-partner.model';

@ObjectType()
export class DefinedAcademyReferral {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => Int, {nullable:true})
    campaignId!: number | null;

    @Field(() => Int, {nullable:true})
    referrerUserId!: number | null;

    @Field(() => Int, {nullable:true})
    partnerId!: number | null;

    @Field(() => Int, {nullable:true})
    referredUserId!: number | null;

    @Field(() => String, {nullable:false})
    referralCode!: string;

    @Field(() => DefinedAcademyReferralStatus, {nullable:false,defaultValue:'VISITED'})
    status!: keyof typeof DefinedAcademyReferralStatus;

    @Field(() => Date, {nullable:false})
    firstVisitedAt!: Date;

    @Field(() => Date, {nullable:true})
    registeredAt!: Date | null;

    @Field(() => Date, {nullable:true})
    enrolledAt!: Date | null;

    @Field(() => Date, {nullable:true})
    attributionExpiresAt!: Date | null;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedAcademy, {nullable:false})
    academy?: DefinedAcademy;

    @Field(() => DefinedAcademyReferralCampaign, {nullable:true})
    campaign?: DefinedAcademyReferralCampaign | null;

    @Field(() => User, {nullable:true})
    referrerUser?: User | null;

    @Field(() => User, {nullable:true})
    referredUser?: User | null;

    @Field(() => DefinedAcademyPartner, {nullable:true})
    partner?: DefinedAcademyPartner | null;
}
