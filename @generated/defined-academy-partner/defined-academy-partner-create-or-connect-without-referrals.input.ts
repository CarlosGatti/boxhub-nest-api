import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateWithoutReferralsInput } from './defined-academy-partner-create-without-referrals.input';

@InputType()
export class DefinedAcademyPartnerCreateOrConnectWithoutReferralsInput {

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerCreateWithoutReferralsInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCreateWithoutReferralsInput)
    create!: DefinedAcademyPartnerCreateWithoutReferralsInput;
}
