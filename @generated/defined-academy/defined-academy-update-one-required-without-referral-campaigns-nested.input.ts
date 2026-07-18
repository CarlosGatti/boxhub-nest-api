import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutReferralCampaignsInput } from './defined-academy-create-without-referral-campaigns.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutReferralCampaignsInput } from './defined-academy-create-or-connect-without-referral-campaigns.input';
import { DefinedAcademyUpsertWithoutReferralCampaignsInput } from './defined-academy-upsert-without-referral-campaigns.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { DefinedAcademyUpdateToOneWithWhereWithoutReferralCampaignsInput } from './defined-academy-update-to-one-with-where-without-referral-campaigns.input';

@InputType()
export class DefinedAcademyUpdateOneRequiredWithoutReferralCampaignsNestedInput {

    @Field(() => DefinedAcademyCreateWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutReferralCampaignsInput)
    create?: DefinedAcademyCreateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyCreateOrConnectWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutReferralCampaignsInput)
    connectOrCreate?: DefinedAcademyCreateOrConnectWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyUpsertWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyUpsertWithoutReferralCampaignsInput)
    upsert?: DefinedAcademyUpsertWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyUpdateToOneWithWhereWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyUpdateToOneWithWhereWithoutReferralCampaignsInput)
    update?: DefinedAcademyUpdateToOneWithWhereWithoutReferralCampaignsInput;
}
