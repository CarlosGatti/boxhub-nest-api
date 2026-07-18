import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateWithoutResourceInput } from './defined-academy-referral-campaign-create-without-resource.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateOrConnectWithoutResourceInput } from './defined-academy-referral-campaign-create-or-connect-without-resource.input';
import { DefinedAcademyReferralCampaignCreateManyResourceInputEnvelope } from './defined-academy-referral-campaign-create-many-resource-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';

@InputType()
export class DefinedAcademyReferralCampaignCreateNestedManyWithoutResourceInput {

    @Field(() => [DefinedAcademyReferralCampaignCreateWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutResourceInput)
    create?: Array<DefinedAcademyReferralCampaignCreateWithoutResourceInput>;

    @Field(() => [DefinedAcademyReferralCampaignCreateOrConnectWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutResourceInput)
    connectOrCreate?: Array<DefinedAcademyReferralCampaignCreateOrConnectWithoutResourceInput>;

    @Field(() => DefinedAcademyReferralCampaignCreateManyResourceInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateManyResourceInputEnvelope)
    createMany?: DefinedAcademyReferralCampaignCreateManyResourceInputEnvelope;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;
}
