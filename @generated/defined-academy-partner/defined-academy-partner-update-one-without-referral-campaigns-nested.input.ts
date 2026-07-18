import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCreateWithoutReferralCampaignsInput } from './defined-academy-partner-create-without-referral-campaigns.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateOrConnectWithoutReferralCampaignsInput } from './defined-academy-partner-create-or-connect-without-referral-campaigns.input';
import { DefinedAcademyPartnerUpsertWithoutReferralCampaignsInput } from './defined-academy-partner-upsert-without-referral-campaigns.input';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { DefinedAcademyPartnerUpdateToOneWithWhereWithoutReferralCampaignsInput } from './defined-academy-partner-update-to-one-with-where-without-referral-campaigns.input';

@InputType()
export class DefinedAcademyPartnerUpdateOneWithoutReferralCampaignsNestedInput {

    @Field(() => DefinedAcademyPartnerCreateWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateWithoutReferralCampaignsInput)
    create?: DefinedAcademyPartnerCreateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyPartnerCreateOrConnectWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateOrConnectWithoutReferralCampaignsInput)
    connectOrCreate?: DefinedAcademyPartnerCreateOrConnectWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyPartnerUpsertWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerUpsertWithoutReferralCampaignsInput)
    upsert?: DefinedAcademyPartnerUpsertWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    disconnect?: DefinedAcademyPartnerWhereInput;

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    delete?: DefinedAcademyPartnerWhereInput;

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerUpdateToOneWithWhereWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerUpdateToOneWithWhereWithoutReferralCampaignsInput)
    update?: DefinedAcademyPartnerUpdateToOneWithWhereWithoutReferralCampaignsInput;
}
