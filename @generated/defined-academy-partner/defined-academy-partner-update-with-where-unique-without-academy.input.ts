import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerUpdateWithoutAcademyInput } from './defined-academy-partner-update-without-academy.input';

@InputType()
export class DefinedAcademyPartnerUpdateWithWhereUniqueWithoutAcademyInput {

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerUpdateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerUpdateWithoutAcademyInput)
    data!: DefinedAcademyPartnerUpdateWithoutAcademyInput;
}
