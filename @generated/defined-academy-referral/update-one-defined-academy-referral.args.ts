import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyReferralUpdateInput } from './defined-academy-referral-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyReferralArgs {

    @Field(() => DefinedAcademyReferralUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyReferralUpdateInput)
    data!: DefinedAcademyReferralUpdateInput;

    @Field(() => DefinedAcademyReferralWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>;
}
