import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateWithoutReferredUserInput } from './defined-academy-referral-create-without-referred-user.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCreateOrConnectWithoutReferredUserInput } from './defined-academy-referral-create-or-connect-without-referred-user.input';
import { DefinedAcademyReferralCreateManyReferredUserInputEnvelope } from './defined-academy-referral-create-many-referred-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';

@InputType()
export class DefinedAcademyReferralCreateNestedManyWithoutReferredUserInput {

    @Field(() => [DefinedAcademyReferralCreateWithoutReferredUserInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateWithoutReferredUserInput)
    create?: Array<DefinedAcademyReferralCreateWithoutReferredUserInput>;

    @Field(() => [DefinedAcademyReferralCreateOrConnectWithoutReferredUserInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateOrConnectWithoutReferredUserInput)
    connectOrCreate?: Array<DefinedAcademyReferralCreateOrConnectWithoutReferredUserInput>;

    @Field(() => DefinedAcademyReferralCreateManyReferredUserInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCreateManyReferredUserInputEnvelope)
    createMany?: DefinedAcademyReferralCreateManyReferredUserInputEnvelope;

    @Field(() => [DefinedAcademyReferralWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>>;
}
