import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateWithoutReferredUserInput } from './defined-academy-referral-create-without-referred-user.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCreateOrConnectWithoutReferredUserInput } from './defined-academy-referral-create-or-connect-without-referred-user.input';
import { DefinedAcademyReferralUpsertWithWhereUniqueWithoutReferredUserInput } from './defined-academy-referral-upsert-with-where-unique-without-referred-user.input';
import { DefinedAcademyReferralCreateManyReferredUserInputEnvelope } from './defined-academy-referral-create-many-referred-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { DefinedAcademyReferralUpdateWithWhereUniqueWithoutReferredUserInput } from './defined-academy-referral-update-with-where-unique-without-referred-user.input';
import { DefinedAcademyReferralUpdateManyWithWhereWithoutReferredUserInput } from './defined-academy-referral-update-many-with-where-without-referred-user.input';
import { DefinedAcademyReferralScalarWhereInput } from './defined-academy-referral-scalar-where.input';

@InputType()
export class DefinedAcademyReferralUncheckedUpdateManyWithoutReferredUserNestedInput {

    @Field(() => [DefinedAcademyReferralCreateWithoutReferredUserInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateWithoutReferredUserInput)
    create?: Array<DefinedAcademyReferralCreateWithoutReferredUserInput>;

    @Field(() => [DefinedAcademyReferralCreateOrConnectWithoutReferredUserInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateOrConnectWithoutReferredUserInput)
    connectOrCreate?: Array<DefinedAcademyReferralCreateOrConnectWithoutReferredUserInput>;

    @Field(() => [DefinedAcademyReferralUpsertWithWhereUniqueWithoutReferredUserInput], {nullable:true})
    @Type(() => DefinedAcademyReferralUpsertWithWhereUniqueWithoutReferredUserInput)
    upsert?: Array<DefinedAcademyReferralUpsertWithWhereUniqueWithoutReferredUserInput>;

    @Field(() => DefinedAcademyReferralCreateManyReferredUserInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCreateManyReferredUserInputEnvelope)
    createMany?: DefinedAcademyReferralCreateManyReferredUserInputEnvelope;

    @Field(() => [DefinedAcademyReferralWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyReferralWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyReferralWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyReferralWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyReferralUpdateWithWhereUniqueWithoutReferredUserInput], {nullable:true})
    @Type(() => DefinedAcademyReferralUpdateWithWhereUniqueWithoutReferredUserInput)
    update?: Array<DefinedAcademyReferralUpdateWithWhereUniqueWithoutReferredUserInput>;

    @Field(() => [DefinedAcademyReferralUpdateManyWithWhereWithoutReferredUserInput], {nullable:true})
    @Type(() => DefinedAcademyReferralUpdateManyWithWhereWithoutReferredUserInput)
    updateMany?: Array<DefinedAcademyReferralUpdateManyWithWhereWithoutReferredUserInput>;

    @Field(() => [DefinedAcademyReferralScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyReferralScalarWhereInput)
    deleteMany?: Array<DefinedAcademyReferralScalarWhereInput>;
}
