import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCreateWithoutReferralCampaignsInput } from './defined-academy-partner-create-without-referral-campaigns.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateOrConnectWithoutReferralCampaignsInput } from './defined-academy-partner-create-or-connect-without-referral-campaigns.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';

@InputType()
export class DefinedAcademyPartnerCreateNestedOneWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyPartnerCreateWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateWithoutReferralCampaignsInput)
    create?: DefinedAcademyPartnerCreateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyPartnerCreateOrConnectWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateOrConnectWithoutReferralCampaignsInput)
    connectOrCreate?: DefinedAcademyPartnerCreateOrConnectWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;
}
