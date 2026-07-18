import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralUpdateWithoutReferrerUserInput } from './defined-academy-referral-update-without-referrer-user.input';
import { DefinedAcademyReferralCreateWithoutReferrerUserInput } from './defined-academy-referral-create-without-referrer-user.input';

@InputType()
export class DefinedAcademyReferralUpsertWithWhereUniqueWithoutReferrerUserInput {

    @Field(() => DefinedAcademyReferralWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyReferralUpdateWithoutReferrerUserInput, {nullable:false})
    @Type(() => DefinedAcademyReferralUpdateWithoutReferrerUserInput)
    update!: DefinedAcademyReferralUpdateWithoutReferrerUserInput;

    @Field(() => DefinedAcademyReferralCreateWithoutReferrerUserInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCreateWithoutReferrerUserInput)
    create!: DefinedAcademyReferralCreateWithoutReferrerUserInput;
}
