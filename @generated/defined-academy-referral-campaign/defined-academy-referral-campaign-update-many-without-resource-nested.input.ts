import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateWithoutResourceInput } from './defined-academy-referral-campaign-create-without-resource.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateOrConnectWithoutResourceInput } from './defined-academy-referral-campaign-create-or-connect-without-resource.input';
import { DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutResourceInput } from './defined-academy-referral-campaign-upsert-with-where-unique-without-resource.input';
import { DefinedAcademyReferralCampaignCreateManyResourceInputEnvelope } from './defined-academy-referral-campaign-create-many-resource-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutResourceInput } from './defined-academy-referral-campaign-update-with-where-unique-without-resource.input';
import { DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutResourceInput } from './defined-academy-referral-campaign-update-many-with-where-without-resource.input';
import { DefinedAcademyReferralCampaignScalarWhereInput } from './defined-academy-referral-campaign-scalar-where.input';

@InputType()
export class DefinedAcademyReferralCampaignUpdateManyWithoutResourceNestedInput {

    @Field(() => [DefinedAcademyReferralCampaignCreateWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutResourceInput)
    create?: Array<DefinedAcademyReferralCampaignCreateWithoutResourceInput>;

    @Field(() => [DefinedAcademyReferralCampaignCreateOrConnectWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutResourceInput)
    connectOrCreate?: Array<DefinedAcademyReferralCampaignCreateOrConnectWithoutResourceInput>;

    @Field(() => [DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutResourceInput)
    upsert?: Array<DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutResourceInput>;

    @Field(() => DefinedAcademyReferralCampaignCreateManyResourceInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateManyResourceInputEnvelope)
    createMany?: DefinedAcademyReferralCampaignCreateManyResourceInputEnvelope;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;

    @Field(() => [DefinedAcademyReferralCampaignWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>>;

    @Field(() => [DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutResourceInput)
    update?: Array<DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutResourceInput>;

    @Field(() => [DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutResourceInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutResourceInput)
    updateMany?: Array<DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutResourceInput>;

    @Field(() => [DefinedAcademyReferralCampaignScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignScalarWhereInput)
    deleteMany?: Array<DefinedAcademyReferralCampaignScalarWhereInput>;
}
