import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryUpdateInput } from './defined-academy-partner-category-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerCategoryWhereUniqueInput } from './defined-academy-partner-category-where-unique.input';

@ArgsType()
export class UpdateOneDefinedAcademyPartnerCategoryArgs {

    @Field(() => DefinedAcademyPartnerCategoryUpdateInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryUpdateInput)
    data!: DefinedAcademyPartnerCategoryUpdateInput;

    @Field(() => DefinedAcademyPartnerCategoryWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerCategoryWhereUniqueInput, 'id' | 'academyId_slug'>;
}
