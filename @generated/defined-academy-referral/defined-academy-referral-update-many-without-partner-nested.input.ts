import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateWithoutPartnerInput } from './defined-academy-referral-create-without-partner.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCreateOrConnectWithoutPartnerInput } from './defined-academy-referral-create-or-connect-without-partner.input';
import { DefinedAcademyReferralUpsertWithWhereUniqueWithoutPartnerInput } from './defined-academy-referral-upsert-with-where-unique-without-partner.input';
import { DefinedAcademyReferralCreateManyPartnerInputEnvelope } from './defined-academy-referral-create-many-partner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';
import { DefinedAcademyReferralUpdateWithWhereUniqueWithoutPartnerInput } from './defined-academy-referral-update-with-where-unique-without-partner.input';
import { DefinedAcademyReferralUpdateManyWithWhereWithoutPartnerInput } from './defined-academy-referral-update-many-with-where-without-partner.input';
import { DefinedAcademyReferralScalarWhereInput } from './defined-academy-referral-scalar-where.input';

@InputType()
export class DefinedAcademyReferralUpdateManyWithoutPartnerNestedInput {

    @Field(() => [DefinedAcademyReferralCreateWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateWithoutPartnerInput)
    create?: Array<DefinedAcademyReferralCreateWithoutPartnerInput>;

    @Field(() => [DefinedAcademyReferralCreateOrConnectWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateOrConnectWithoutPartnerInput)
    connectOrCreate?: Array<DefinedAcademyReferralCreateOrConnectWithoutPartnerInput>;

    @Field(() => [DefinedAcademyReferralUpsertWithWhereUniqueWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyReferralUpsertWithWhereUniqueWithoutPartnerInput)
    upsert?: Array<DefinedAcademyReferralUpsertWithWhereUniqueWithoutPartnerInput>;

    @Field(() => DefinedAcademyReferralCreateManyPartnerInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCreateManyPartnerInputEnvelope)
    createMany?: DefinedAcademyReferralCreateManyPartnerInputEnvelope;

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

    @Field(() => [DefinedAcademyReferralUpdateWithWhereUniqueWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyReferralUpdateWithWhereUniqueWithoutPartnerInput)
    update?: Array<DefinedAcademyReferralUpdateWithWhereUniqueWithoutPartnerInput>;

    @Field(() => [DefinedAcademyReferralUpdateManyWithWhereWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyReferralUpdateManyWithWhereWithoutPartnerInput)
    updateMany?: Array<DefinedAcademyReferralUpdateManyWithWhereWithoutPartnerInput>;

    @Field(() => [DefinedAcademyReferralScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyReferralScalarWhereInput)
    deleteMany?: Array<DefinedAcademyReferralScalarWhereInput>;
}
