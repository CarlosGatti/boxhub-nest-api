import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerCategoryWhereUniqueInput } from './defined-academy-partner-category-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryCreateInput } from './defined-academy-partner-category-create.input';
import { DefinedAcademyPartnerCategoryUpdateInput } from './defined-academy-partner-category-update.input';

@ArgsType()
export class UpsertOneDefinedAcademyPartnerCategoryArgs {

    @Field(() => DefinedAcademyPartnerCategoryWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerCategoryWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerCategoryCreateInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryCreateInput)
    create!: DefinedAcademyPartnerCategoryCreateInput;

    @Field(() => DefinedAcademyPartnerCategoryUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryUpdateInput)
    update!: DefinedAcademyPartnerCategoryUpdateInput;
}
