import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDefinedAcademyReferralArgs {

    @Field(() => DefinedAcademyReferralWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>;
}
