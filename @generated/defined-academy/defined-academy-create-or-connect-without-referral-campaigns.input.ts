import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutReferralCampaignsInput } from './defined-academy-create-without-referral-campaigns.input';

@InputType()
export class DefinedAcademyCreateOrConnectWithoutReferralCampaignsInput {

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyCreateWithoutReferralCampaignsInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutReferralCampaignsInput)
    create!: DefinedAcademyCreateWithoutReferralCampaignsInput;
}
