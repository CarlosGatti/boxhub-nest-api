import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerCategoryWhereUniqueInput } from './defined-academy-partner-category-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryUpdateWithoutAcademyInput } from './defined-academy-partner-category-update-without-academy.input';

@InputType()
export class DefinedAcademyPartnerCategoryUpdateWithWhereUniqueWithoutAcademyInput {

    @Field(() => DefinedAcademyPartnerCategoryWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerCategoryWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerCategoryUpdateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryUpdateWithoutAcademyInput)
    data!: DefinedAcademyPartnerCategoryUpdateWithoutAcademyInput;
}
