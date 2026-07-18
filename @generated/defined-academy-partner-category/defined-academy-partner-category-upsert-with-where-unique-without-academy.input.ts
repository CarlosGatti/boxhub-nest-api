import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerCategoryWhereUniqueInput } from './defined-academy-partner-category-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryUpdateWithoutAcademyInput } from './defined-academy-partner-category-update-without-academy.input';
import { DefinedAcademyPartnerCategoryCreateWithoutAcademyInput } from './defined-academy-partner-category-create-without-academy.input';

@InputType()
export class DefinedAcademyPartnerCategoryUpsertWithWhereUniqueWithoutAcademyInput {

    @Field(() => DefinedAcademyPartnerCategoryWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerCategoryWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerCategoryUpdateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryUpdateWithoutAcademyInput)
    update!: DefinedAcademyPartnerCategoryUpdateWithoutAcademyInput;

    @Field(() => DefinedAcademyPartnerCategoryCreateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryCreateWithoutAcademyInput)
    create!: DefinedAcademyPartnerCategoryCreateWithoutAcademyInput;
}
