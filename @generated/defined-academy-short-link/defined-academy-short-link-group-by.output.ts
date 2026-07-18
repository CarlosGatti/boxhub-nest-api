import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyShortLinkStatus } from '../prisma/defined-academy-short-link-status.enum';
import { DefinedAcademyShortLinkCountAggregate } from './defined-academy-short-link-count-aggregate.output';
import { DefinedAcademyShortLinkAvgAggregate } from './defined-academy-short-link-avg-aggregate.output';
import { DefinedAcademyShortLinkSumAggregate } from './defined-academy-short-link-sum-aggregate.output';
import { DefinedAcademyShortLinkMinAggregate } from './defined-academy-short-link-min-aggregate.output';
import { DefinedAcademyShortLinkMaxAggregate } from './defined-academy-short-link-max-aggregate.output';

@ObjectType()
export class DefinedAcademyShortLinkGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    destinationUrl!: string;

    @Field(() => Int, {nullable:true})
    resourceId?: number;

    @Field(() => Int, {nullable:true})
    courseId?: number;

    @Field(() => Int, {nullable:true})
    partnerId?: number;

    @Field(() => Int, {nullable:true})
    referralCampaignId?: number;

    @Field(() => DefinedAcademyShortLinkStatus, {nullable:false})
    status!: keyof typeof DefinedAcademyShortLinkStatus;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => Int, {nullable:false})
    visitCount!: number;

    @Field(() => Int, {nullable:true})
    createdById?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedAcademyShortLinkCountAggregate, {nullable:true})
    _count?: DefinedAcademyShortLinkCountAggregate;

    @Field(() => DefinedAcademyShortLinkAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyShortLinkAvgAggregate;

    @Field(() => DefinedAcademyShortLinkSumAggregate, {nullable:true})
    _sum?: DefinedAcademyShortLinkSumAggregate;

    @Field(() => DefinedAcademyShortLinkMinAggregate, {nullable:true})
    _min?: DefinedAcademyShortLinkMinAggregate;

    @Field(() => DefinedAcademyShortLinkMaxAggregate, {nullable:true})
    _max?: DefinedAcademyShortLinkMaxAggregate;
}
