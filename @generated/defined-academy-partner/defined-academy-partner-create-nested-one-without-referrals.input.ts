import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCreateWithoutReferralsInput } from './defined-academy-partner-create-without-referrals.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateOrConnectWithoutReferralsInput } from './defined-academy-partner-create-or-connect-without-referrals.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';

@InputType()
export class DefinedAcademyPartnerCreateNestedOneWithoutReferralsInput {

    @Field(() => DefinedAcademyPartnerCreateWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateWithoutReferralsInput)
    create?: DefinedAcademyPartnerCreateWithoutReferralsInput;

    @Field(() => DefinedAcademyPartnerCreateOrConnectWithoutReferralsInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateOrConnectWithoutReferralsInput)
    connectOrCreate?: DefinedAcademyPartnerCreateOrConnectWithoutReferralsInput;

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;
}
