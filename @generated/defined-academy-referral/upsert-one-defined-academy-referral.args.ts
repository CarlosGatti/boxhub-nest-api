import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCreateInput } from './defined-academy-referral-create.input';
import { DefinedAcademyReferralUpdateInput } from './defined-academy-referral-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyReferralArgs {

    @Field(() => DefinedAcademyReferralWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyReferralCreateInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCreateInput)
    create!: DefinedAcademyReferralCreateInput;

    @Field(() => DefinedAcademyReferralUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyReferralUpdateInput)
    update!: DefinedAcademyReferralUpdateInput;
}
