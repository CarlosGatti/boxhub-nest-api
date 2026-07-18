import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DefinedAcademyReferralCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    academyId?: true;

    @Field(() => Boolean, {nullable:true})
    campaignId?: true;

    @Field(() => Boolean, {nullable:true})
    referrerUserId?: true;

    @Field(() => Boolean, {nullable:true})
    partnerId?: true;

    @Field(() => Boolean, {nullable:true})
    referredUserId?: true;

    @Field(() => Boolean, {nullable:true})
    referralCode?: true;

    @Field(() => Boolean, {nullable:true})
    status?: true;

    @Field(() => Boolean, {nullable:true})
    firstVisitedAt?: true;

    @Field(() => Boolean, {nullable:true})
    registeredAt?: true;

    @Field(() => Boolean, {nullable:true})
    enrolledAt?: true;

    @Field(() => Boolean, {nullable:true})
    attributionExpiresAt?: true;

    @Field(() => Boolean, {nullable:true})
    metadata?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
