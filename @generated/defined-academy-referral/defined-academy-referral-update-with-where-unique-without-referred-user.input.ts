import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralUpdateWithoutReferredUserInput } from './defined-academy-referral-update-without-referred-user.input';

@InputType()
export class DefinedAcademyReferralUpdateWithWhereUniqueWithoutReferredUserInput {

    @Field(() => DefinedAcademyReferralWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyReferralUpdateWithoutReferredUserInput, {nullable:false})
    @Type(() => DefinedAcademyReferralUpdateWithoutReferredUserInput)
    data!: DefinedAcademyReferralUpdateWithoutReferredUserInput;
}
