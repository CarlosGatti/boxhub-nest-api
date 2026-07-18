import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyReferralStatus } from '../prisma/defined-academy-referral-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DefinedAcademyReferralCountAggregate } from './defined-academy-referral-count-aggregate.output';
import { DefinedAcademyReferralAvgAggregate } from './defined-academy-referral-avg-aggregate.output';
import { DefinedAcademyReferralSumAggregate } from './defined-academy-referral-sum-aggregate.output';
import { DefinedAcademyReferralMinAggregate } from './defined-academy-referral-min-aggregate.output';
import { DefinedAcademyReferralMaxAggregate } from './defined-academy-referral-max-aggregate.output';

@ObjectType()
export class DefinedAcademyReferralGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => Int, {nullable:true})
    campaignId?: number;

    @Field(() => Int, {nullable:true})
    referrerUserId?: number;

    @Field(() => Int, {nullable:true})
    partnerId?: number;

    @Field(() => Int, {nullable:true})
    referredUserId?: number;

    @Field(() => String, {nullable:false})
    referralCode!: string;

    @Field(() => DefinedAcademyReferralStatus, {nullable:false})
    status!: keyof typeof DefinedAcademyReferralStatus;

    @Field(() => Date, {nullable:false})
    firstVisitedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    registeredAt?: Date | string;

    @Field(() => Date, {nullable:true})
    enrolledAt?: Date | string;

    @Field(() => Date, {nullable:true})
    attributionExpiresAt?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedAcademyReferralCountAggregate, {nullable:true})
    _count?: DefinedAcademyReferralCountAggregate;

    @Field(() => DefinedAcademyReferralAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyReferralAvgAggregate;

    @Field(() => DefinedAcademyReferralSumAggregate, {nullable:true})
    _sum?: DefinedAcademyReferralSumAggregate;

    @Field(() => DefinedAcademyReferralMinAggregate, {nullable:true})
    _min?: DefinedAcademyReferralMinAggregate;

    @Field(() => DefinedAcademyReferralMaxAggregate, {nullable:true})
    _max?: DefinedAcademyReferralMaxAggregate;
}
