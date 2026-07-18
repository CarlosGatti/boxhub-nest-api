import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateWithoutAcademyInput } from './defined-academy-referral-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCreateOrConnectWithoutAcademyInput } from './defined-academy-referral-create-or-connect-without-academy.input';
import { DefinedAcademyReferralCreateManyAcademyInputEnvelope } from './defined-academy-referral-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';

@InputType()
export class DefinedAcademyReferralUncheckedCreateNestedManyWithoutAcademyInput {

    @Field(() => [DefinedAcademyReferralCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyReferralCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyReferralCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyReferralCreateOrConnectWithoutAcademyInput>;

    @Field(() => DefinedAcademyReferralCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyReferralCreateManyAcademyInputEnvelope;

    @Field(() => [DefinedAcademyReferralWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>>;
}
