import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralCreateWithoutPartnerInput } from './defined-academy-referral-create-without-partner.input';
import { Type } from 'class-transformer';
import { DefinedAcademyReferralCreateOrConnectWithoutPartnerInput } from './defined-academy-referral-create-or-connect-without-partner.input';
import { DefinedAcademyReferralCreateManyPartnerInputEnvelope } from './defined-academy-referral-create-many-partner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyReferralWhereUniqueInput } from './defined-academy-referral-where-unique.input';

@InputType()
export class DefinedAcademyReferralUncheckedCreateNestedManyWithoutPartnerInput {

    @Field(() => [DefinedAcademyReferralCreateWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateWithoutPartnerInput)
    create?: Array<DefinedAcademyReferralCreateWithoutPartnerInput>;

    @Field(() => [DefinedAcademyReferralCreateOrConnectWithoutPartnerInput], {nullable:true})
    @Type(() => DefinedAcademyReferralCreateOrConnectWithoutPartnerInput)
    connectOrCreate?: Array<DefinedAcademyReferralCreateOrConnectWithoutPartnerInput>;

    @Field(() => DefinedAcademyReferralCreateManyPartnerInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyReferralCreateManyPartnerInputEnvelope)
    createMany?: DefinedAcademyReferralCreateManyPartnerInputEnvelope;

    @Field(() => [DefinedAcademyReferralWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyReferralWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyReferralWhereUniqueInput, 'id'>>;
}
