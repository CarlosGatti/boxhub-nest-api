import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralUpdateWithoutPartnerInput } from './defined-academy-referral-update-without-partner.input';

@InputType()
export class DefinedAcademyReferralUpdateWithWhereUniqueWithoutPartnerInput {

    @Field(() => DefinedAcademyReferralWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyReferralUpdateWithoutPartnerInput, {nullable:false})
    @Type(() => DefinedAcademyReferralUpdateWithoutPartnerInput)
    data!: DefinedAcademyReferralUpdateWithoutPartnerInput;
}
