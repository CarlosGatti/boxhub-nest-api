import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignWhereInput } from './defined-academy-referral-campaign-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCampaignOrderByWithRelationInput } from './defined-academy-referral-campaign-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralCampaignWhereUniqueInput } from './defined-academy-referral-campaign-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyReferralCampaignScalarFieldEnum } from './defined-academy-referral-campaign-scalar-field.enum';

@ArgsType()
export class FindFirstDefinedAcademyReferralCampaignArgs {

    @Field(() => DefinedAcademyReferralCampaignWhereInput, {nullable:true})
    @Type(() => DefinedAcademyReferralCampaignWhereInput)
    where?: DefinedAcademyReferralCampaignWhereInput;

    @Field(() => [DefinedAcademyReferralCampaignOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyReferralCampaignOrderByWithRelationInput>;

    @Field(() => DefinedAcademyReferralCampaignWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyReferralCampaignWhereUniqueInput, 'id' | 'academyId_code'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyReferralCampaignScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyReferralCampaignScalarFieldEnum>;
}
