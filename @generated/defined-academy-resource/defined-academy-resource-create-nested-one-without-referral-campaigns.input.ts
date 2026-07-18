import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateWithoutReferralCampaignsInput } from './defined-academy-resource-create-without-referral-campaigns.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateOrConnectWithoutReferralCampaignsInput } from './defined-academy-resource-create-or-connect-without-referral-campaigns.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';

@InputType()
export class DefinedAcademyResourceCreateNestedOneWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyResourceCreateWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateWithoutReferralCampaignsInput)
    create?: DefinedAcademyResourceCreateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyResourceCreateOrConnectWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateOrConnectWithoutReferralCampaignsInput)
    connectOrCreate?: DefinedAcademyResourceCreateOrConnectWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;
}
