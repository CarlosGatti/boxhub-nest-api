import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignCreateWithoutAcademyInput } from './defined-academy-referral-campaign-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignCreateOrConnectWithoutAcademyInput } from './defined-academy-referral-campaign-create-or-connect-without-academy.input';
import { DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutAcademyInput } from './defined-academy-referral-campaign-upsert-with-where-unique-without-academy.input';
import { DefinedAcademyReferralCampaignCreateManyAcademyInputEnvelope } from './defined-academy-referral-campaign-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutAcademyInput } from './defined-academy-referral-campaign-update-with-where-unique-without-academy.input';
import { DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutAcademyInput } from './defined-academy-referral-campaign-update-many-with-where-without-academy.input';
import { DefinedAcademyReferralCampaignScalarWhereInput } from './defined-academy-referral-campaign-scalar-where.input';

@InputType()
export class DefinedAcademyReferralCampaignUncheckedUpdateManyWithoutAcademyNestedInput {

    @Field(() => [DefinedAcademyReferralCampaignCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyReferralCampaignCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyReferralCampaignCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyReferralCampaignCreateOrConnectWithoutAcademyInput>;

    @Field(() => [DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutAcademyInput)
    upsert?: Array<DefinedAcademyReferralCampaignUpsertWithWhereUniqueWithoutAcademyInput>;

    @Field(() => DefinedAcademyReferralCampaignCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyReferralCampaignCreateManyAcademyInputEnvelope;

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

    @Field(() => [DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutAcademyInput)
    update?: Array<DefinedAcademyReferralCampaignUpdateWithWhereUniqueWithoutAcademyInput>;

    @Field(() => [DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutAcademyInput)
    updateMany?: Array<DefinedAcademyReferralCampaignUpdateManyWithWhereWithoutAcademyInput>;

    @Field(() => [DefinedAcademyReferralCampaignScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignScalarWhereInput)
    deleteMany?: Array<DefinedAcademyReferralCampaignScalarWhereInput>;
}
