import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCreateWithoutReferralsInput } from './defined-academy-partner-create-without-referrals.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateOrConnectWithoutReferralsInput } from './defined-academy-partner-create-or-connect-without-referrals.input';
import { DefinedAcademyPartnerUpsertWithoutReferralsInput } from './defined-academy-partner-upsert-without-referrals.input';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { DefinedAcademyPartnerUpdateToOneWithWhereWithoutReferralsInput } from './defined-academy-partner-update-to-one-with-where-without-referrals.input';

@InputType()
export class DefinedAcademyPartnerUpdateOneWithoutReferralsNestedInput {

    @Field(() => DefinedAcademyPartnerCreateWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateWithoutReferralsInput)
    create?: DefinedAcademyPartnerCreateWithoutReferralsInput;

    @Field(() => DefinedAcademyPartnerCreateOrConnectWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateOrConnectWithoutReferralsInput)
    connectOrCreate?: DefinedAcademyPartnerCreateOrConnectWithoutReferralsInput;

    @Field(() => DefinedAcademyPartnerUpsertWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerUpsertWithoutReferralsInput)
    upsert?: DefinedAcademyPartnerUpsertWithoutReferralsInput;

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    disconnect?: DefinedAcademyPartnerWhereInput;

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereInput)
    delete?: DefinedAcademyPartnerWhereInput;

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerUpdateToOneWithWhereWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerUpdateToOneWithWhereWithoutReferralsInput)
    update?: DefinedAcademyPartnerUpdateToOneWithWhereWithoutReferralsInput;
}
