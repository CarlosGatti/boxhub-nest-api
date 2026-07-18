import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateWithoutAcademyInput } from './defined-academy-referral-campaign-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateOrConnectWithoutAcademyInput } from './defined-academy-referral-campaign-create-or-connect-without-academy.input';
import { DefinedAcademyReferralCampaignCreateManyAcademyInputEnvelope } from './defined-academy-referral-campaign-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';

@InputType()
export class DefinedAcademyReferralCampaignCreateNestedManyWithoutAcademyInput {

    @Field(() => [DefinedAcademyReferralCampaignCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyReferralCampaignCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyReferralCampaignCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyReferralCampaignCreateOrConnectWithoutAcademyInput>;

    @Field(() => DefinedAcademyReferralCampaignCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyReferralCampaignCreateManyAcademyInputEnvelope;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;
}
