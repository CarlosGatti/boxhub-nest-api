import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyShortLinkStatus } from '../prisma/defined-academy-short-link-status.enum';

@InputType()
export class DefinedAcademyShortLinkCreateManyReferralCampaignInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => DefinedAcademyShortLinkStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyShortLinkStatus;

    @Field(() => Date, {nullable:true})
    expiresAt?: Date | string;

    @Field(() => Int, {nullable:true})
    visitCount?: number;

    @Field(() => Int, {nullable:true})
    createdById?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
