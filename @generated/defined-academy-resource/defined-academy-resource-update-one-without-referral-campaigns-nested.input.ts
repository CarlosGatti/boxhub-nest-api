import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateWithoutReferralCampaignsInput } from './defined-academy-resource-create-without-referral-campaigns.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateOrConnectWithoutReferralCampaignsInput } from './defined-academy-resource-create-or-connect-without-referral-campaigns.input';
import { DefinedAcademyResourceUpsertWithoutReferralCampaignsInput } from './defined-academy-resource-upsert-without-referral-campaigns.input';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { DefinedAcademyResourceUpdateToOneWithWhereWithoutReferralCampaignsInput } from './defined-academy-resource-update-to-one-with-where-without-referral-campaigns.input';

@InputType()
export class DefinedAcademyResourceUpdateOneWithoutReferralCampaignsNestedInput {

    @Field(() => DefinedAcademyResourceCreateWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateWithoutReferralCampaignsInput)
    create?: DefinedAcademyResourceCreateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyResourceCreateOrConnectWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateOrConnectWithoutReferralCampaignsInput)
    connectOrCreate?: DefinedAcademyResourceCreateOrConnectWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyResourceUpsertWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyResourceUpsertWithoutReferralCampaignsInput)
    upsert?: DefinedAcademyResourceUpsertWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    disconnect?: DefinedAcademyResourceWhereInput;

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    delete?: DefinedAcademyResourceWhereInput;

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyResourceUpdateToOneWithWhereWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyResourceUpdateToOneWithWhereWithoutReferralCampaignsInput)
    update?: DefinedAcademyResourceUpdateToOneWithWhereWithoutReferralCampaignsInput;
}
