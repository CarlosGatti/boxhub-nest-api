import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DefinedAcademyShortLinkCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => Int, {nullable:false})
    code!: number;

    @Field(() => Int, {nullable:false})
    destinationUrl!: number;

    @Field(() => Int, {nullable:false})
    resourceId!: number;

    @Field(() => Int, {nullable:false})
    courseId!: number;

    @Field(() => Int, {nullable:false})
    partnerId!: number;

    @Field(() => Int, {nullable:false})
    referralCampaignId!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    expiresAt!: number;

    @Field(() => Int, {nullable:false})
    visitCount!: number;

    @Field(() => Int, {nullable:false})
    createdById!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
