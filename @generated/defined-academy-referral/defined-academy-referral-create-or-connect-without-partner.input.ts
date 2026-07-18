import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCreateWithoutPartnerInput } from './defined-academy-referral-create-without-partner.input';

@InputType()
export class DefinedAcademyReferralCreateOrConnectWithoutPartnerInput {

    @Field(() => DefinedAcademyReferralWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyReferralCreateWithoutPartnerInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCreateWithoutPartnerInput)
    create!: DefinedAcademyReferralCreateWithoutPartnerInput;
}
