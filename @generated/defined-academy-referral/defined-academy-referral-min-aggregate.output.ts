import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyReferralStatus } from '../prisma/defined-academy-referral-status.enum';

@ObjectType()
export class DefinedAcademyReferralMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    academyId?: number;

    @Field(() => Int, {nullable:true})
    campaignId?: number;

    @Field(() => Int, {nullable:true})
    referrerUserId?: number;

    @Field(() => Int, {nullable:true})
    partnerId?: number;

    @Field(() => Int, {nullable:true})
    referredUserId?: number;

    @Field(() => String, {nullable:true})
    referralCode?: string;

    @Field(() => DefinedAcademyReferralStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyReferralStatus;

    @Field(() => Date, {nullable:true})
    firstVisitedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    registeredAt?: Date | string;

    @Field(() => Date, {nullable:true})
    enrolledAt?: Date | string;

    @Field(() => Date, {nullable:true})
    attributionExpiresAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
