import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCreateWithoutReferredUserInput } from './defined-academy-referral-create-without-referred-user.input';

@InputType()
export class DefinedAcademyReferralCreateOrConnectWithoutReferredUserInput {

    @Field(() => DefinedAcademyReferralWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyReferralCreateWithoutReferredUserInput, {nullable:false})
    @Type(() => DefinedAcademyReferralCreateWithoutReferredUserInput)
    create!: DefinedAcademyReferralCreateWithoutReferredUserInput;
}
