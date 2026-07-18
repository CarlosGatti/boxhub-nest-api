import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerUpdateWithoutAcademyInput } from './defined-academy-partner-update-without-academy.input';
import { DefinedAcademyPartnerCreateWithoutAcademyInput } from './defined-academy-partner-create-without-academy.input';

@InputType()
export class DefinedAcademyPartnerUpsertWithWhereUniqueWithoutAcademyInput {

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerUpdateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerUpdateWithoutAcademyInput)
    update!: DefinedAcademyPartnerUpdateWithoutAcademyInput;

    @Field(() => DefinedAcademyPartnerCreateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCreateWithoutAcademyInput)
    create!: DefinedAcademyPartnerCreateWithoutAcademyInput;
}
