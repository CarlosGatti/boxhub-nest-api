import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerCategoryWhereUniqueInput } from './defined-academy-partner-category-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryCreateWithoutPartnersInput } from './defined-academy-partner-category-create-without-partners.input';

@InputType()
export class DefinedAcademyPartnerCategoryCreateOrConnectWithoutPartnersInput {

    @Field(() => DefinedAcademyPartnerCategoryWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyPartnerCategoryWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerCategoryCreateWithoutPartnersInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryCreateWithoutPartnersInput)
    create!: DefinedAcademyPartnerCategoryCreateWithoutPartnersInput;
}
