import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerCategoryWhereUniqueInput } from './defined-academy-partner-category-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryCreateWithoutAcademyInput } from './defined-academy-partner-category-create-without-academy.input';

@InputType()
export class DefinedAcademyPartnerCategoryCreateOrConnectWithoutAcademyInput {

    @Field(() => DefinedAcademyPartnerCategoryWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerCategoryWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerCategoryCreateWithoutAcademyInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryCreateWithoutAcademyInput)
    create!: DefinedAcademyPartnerCategoryCreateWithoutAcademyInput;
}
