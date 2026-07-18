import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateWithoutReferrerUserInput } from './defined-academy-referral-create-without-referrer-user.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCreateOrConnectWithoutReferrerUserInput } from './defined-academy-referral-create-or-connect-without-referrer-user.input';
import { DefinedAcademyReferralUpsertWithWhereUniqueWithoutReferrerUserInput } from './defined-academy-referral-upsert-with-where-unique-without-referrer-user.input';
import { DefinedAcademyReferralCreateManyReferrerUserInputEnvelope } from './defined-academy-referral-create-many-referrer-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { DefinedAcademyReferralUpdateWithWhereUniqueWithoutReferrerUserInput } from './defined-academy-referral-update-with-where-unique-without-referrer-user.input';
import { DefinedAcademyReferralUpdateManyWithWhereWithoutReferrerUserInput } from './defined-academy-referral-update-many-with-where-without-referrer-user.input';
import { DefinedAcademyReferralScalarWhereInput } from './defined-academy-referral-scalar-where.input';

@InputType()
export class DefinedAcademyReferralUncheckedUpdateManyWithoutReferrerUserNestedInput {

    @Field(() => [DefinedAcademyReferralCreateWithoutReferrerUserInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateWithoutReferrerUserInput)
    create?: Array<DefinedAcademyReferralCreateWithoutReferrerUserInput>;

    @Field(() => [DefinedAcademyReferralCreateOrConnectWithoutReferrerUserInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateOrConnectWithoutReferrerUserInput)
    connectOrCreate?: Array<DefinedAcademyReferralCreateOrConnectWithoutReferrerUserInput>;

    @Field(() => [DefinedAcademyReferralUpsertWithWhereUniqueWithoutReferrerUserInput], {nullable:true})
    @Type(() => DefinedAcademyReferralUpsertWithWhereUniqueWithoutReferrerUserInput)
    upsert?: Array<DefinedAcademyReferralUpsertWithWhereUniqueWithoutReferrerUserInput>;

    @Field(() => DefinedAcademyReferralCreateManyReferrerUserInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCreateManyReferrerUserInputEnvelope)
    createMany?: DefinedAcademyReferralCreateManyReferrerUserInputEnvelope;

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

    @Field(() => [DefinedAcademyReferralUpdateWithWhereUniqueWithoutReferrerUserInput], {nullable:true})
    @Type(() => DefinedAcademyReferralUpdateWithWhereUniqueWithoutReferrerUserInput)
    update?: Array<DefinedAcademyReferralUpdateWithWhereUniqueWithoutReferrerUserInput>;

    @Field(() => [DefinedAcademyReferralUpdateManyWithWhereWithoutReferrerUserInput], {nullable:true})
    @Type(() => DefinedAcademyReferralUpdateManyWithWhereWithoutReferrerUserInput)
    updateMany?: Array<DefinedAcademyReferralUpdateManyWithWhereWithoutReferrerUserInput>;

    @Field(() => [DefinedAcademyReferralScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyReferralScalarWhereInput)
    deleteMany?: Array<DefinedAcademyReferralScalarWhereInput>;
}
