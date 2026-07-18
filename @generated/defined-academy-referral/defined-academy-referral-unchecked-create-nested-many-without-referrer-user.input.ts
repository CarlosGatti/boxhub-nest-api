import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateWithoutReferrerUserInput } from './defined-academy-referral-create-without-referrer-user.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCreateOrConnectWithoutReferrerUserInput } from './defined-academy-referral-create-or-connect-without-referrer-user.input';
import { DefinedAcademyReferralCreateManyReferrerUserInputEnvelope } from './defined-academy-referral-create-many-referrer-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';

@InputType()
export class DefinedAcademyReferralUncheckedCreateNestedManyWithoutReferrerUserInput {

    @Field(() => [DefinedAcademyReferralCreateWithoutReferrerUserInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateWithoutReferrerUserInput)
    create?: Array<DefinedAcademyReferralCreateWithoutReferrerUserInput>;

    @Field(() => [DefinedAcademyReferralCreateOrConnectWithoutReferrerUserInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateOrConnectWithoutReferrerUserInput)
    connectOrCreate?: Array<DefinedAcademyReferralCreateOrConnectWithoutReferrerUserInput>;

    @Field(() => DefinedAcademyReferralCreateManyReferrerUserInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCreateManyReferrerUserInputEnvelope)
    createMany?: DefinedAcademyReferralCreateManyReferrerUserInputEnvelope;

    @Field(() => [DefinedAcademyReferralWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>>;
}
