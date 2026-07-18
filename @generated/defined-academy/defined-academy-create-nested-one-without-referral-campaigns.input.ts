import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutReferralCampaignsInput } from './defined-academy-create-without-referral-campaigns.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutReferralCampaignsInput } from './defined-academy-create-or-connect-without-referral-campaigns.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';

@InputType()
export class DefinedAcademyCreateNestedOneWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyCreateWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutReferralCampaignsInput)
    create?: DefinedAcademyCreateWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyCreateOrConnectWithoutReferralCampaignsInput, {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutReferralCampaignsInput)
    connectOrCreate?: DefinedAcademyCreateOrConnectWithoutReferralCampaignsInput;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;
}
