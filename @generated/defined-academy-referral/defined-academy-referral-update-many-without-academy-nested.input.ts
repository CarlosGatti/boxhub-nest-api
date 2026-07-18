import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateWithoutAcademyInput } from './defined-academy-referral-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCreateOrConnectWithoutAcademyInput } from './defined-academy-referral-create-or-connect-without-academy.input';
import { DefinedAcademyReferralUpsertWithWhereUniqueWithoutAcademyInput } from './defined-academy-referral-upsert-with-where-unique-without-academy.input';
import { DefinedAcademyReferralCreateManyAcademyInputEnvelope } from './defined-academy-referral-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { DefinedAcademyReferralUpdateWithWhereUniqueWithoutAcademyInput } from './defined-academy-referral-update-with-where-unique-without-academy.input';
import { DefinedAcademyReferralUpdateManyWithWhereWithoutAcademyInput } from './defined-academy-referral-update-many-with-where-without-academy.input';
import { DefinedAcademyReferralScalarWhereInput } from './defined-academy-referral-scalar-where.input';

@InputType()
export class DefinedAcademyReferralUpdateManyWithoutAcademyNestedInput {

    @Field(() => [DefinedAcademyReferralCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyReferralCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyReferralCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyReferralCreateOrConnectWithoutAcademyInput>;

    @Field(() => [DefinedAcademyReferralUpsertWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyReferralUpsertWithWhereUniqueWithoutAcademyInput)
    upsert?: Array<DefinedAcademyReferralUpsertWithWhereUniqueWithoutAcademyInput>;

    @Field(() => DefinedAcademyReferralCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyReferralCreateManyAcademyInputEnvelope;

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

    @Field(() => [DefinedAcademyReferralUpdateWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyReferralUpdateWithWhereUniqueWithoutAcademyInput)
    update?: Array<DefinedAcademyReferralUpdateWithWhereUniqueWithoutAcademyInput>;

    @Field(() => [DefinedAcademyReferralUpdateManyWithWhereWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyReferralUpdateManyWithWhereWithoutAcademyInput)
    updateMany?: Array<DefinedAcademyReferralUpdateManyWithWhereWithoutAcademyInput>;

    @Field(() => [DefinedAcademyReferralScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyReferralScalarWhereInput)
    deleteMany?: Array<DefinedAcademyReferralScalarWhereInput>;
}
