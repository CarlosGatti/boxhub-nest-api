import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateWithoutReferralCampaignsInput } from './defined-academy-resource-create-without-referral-campaigns.input';

@InputType()
export class DefinedAcademyResourceCreateOrConnectWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyResourceCreateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyResourceCreateWithoutReferralCampaignsInput)
    create!: DefinedAcademyResourceCreateWithoutReferralCampaignsInput;
}
