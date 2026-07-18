import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerUpdateWithoutCategoryInput } from './defined-academy-partner-update-without-category.input';
import { DefinedAcademyPartnerCreateWithoutCategoryInput } from './defined-academy-partner-create-without-category.input';

@InputType()
export class DefinedAcademyPartnerUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => DefinedAcademyPartnerWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerUpdateWithoutCategoryInput)
    update!: DefinedAcademyPartnerUpdateWithoutCategoryInput;

    @Field(() => DefinedAcademyPartnerCreateWithoutCategoryInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCreateWithoutCategoryInput)
    create!: DefinedAcademyPartnerCreateWithoutCategoryInput;
}
