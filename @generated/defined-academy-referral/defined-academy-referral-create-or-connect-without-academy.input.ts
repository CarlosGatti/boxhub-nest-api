import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCreateWithoutAcademyInput } from './defined-academy-referral-create-without-academy.input';

@InputType()
export class DefinedAcademyReferralCreateOrConnectWithoutAcademyInput {

    @Field(() => DefinedAcademyReferralWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyReferralCreateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCreateWithoutAcademyInput)
    create!: DefinedAcademyReferralCreateWithoutAcademyInput;
}
