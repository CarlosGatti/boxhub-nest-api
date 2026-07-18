import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyReferralStatus } from '../prisma/defined-academy-referral-status.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class DefinedAcademyReferralCreateManyReferrerUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => Int, {nullable:true})
    campaignId?: number;

    @Field(() => Int, {nullable:true})
    partnerId?: number;

    @Field(() => Int, {nullable:true})
    referredUserId?: number;

    @Field(() => String, {nullable:false})
    referralCode!: string;

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

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
