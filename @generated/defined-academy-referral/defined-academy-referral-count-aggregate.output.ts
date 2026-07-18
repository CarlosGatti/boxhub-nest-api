import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyReferralCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => Int, {nullable:false})
    campaignId!: number;

    @Field(() => Int, {nullable:false})
    referrerUserId!: number;

    @Field(() => Int, {nullable:false})
    partnerId!: number;

    @Field(() => Int, {nullable:false})
    referredUserId!: number;

    @Field(() => Int, {nullable:false})
    referralCode!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    firstVisitedAt!: number;

    @Field(() => Int, {nullable:false})
    registeredAt!: number;

    @Field(() => Int, {nullable:false})
    enrolledAt!: number;

    @Field(() => Int, {nullable:false})
    attributionExpiresAt!: number;

    @Field(() => Int, {nullable:false})
    metadata!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
