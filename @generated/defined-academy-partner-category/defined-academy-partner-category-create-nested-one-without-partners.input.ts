import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryCreateWithoutPartnersInput } from './defined-academy-partner-category-create-without-partners.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryCreateOrConnectWithoutPartnersInput } from './defined-academy-partner-category-create-or-connect-without-partners.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerCategoryWhereUniqueInput } from './defined-academy-partner-category-where-unique.input';

@InputType()
export class DefinedAcademyPartnerCategoryCreateNestedOneWithoutPartnersInput {

    @Field(() => DefinedAcademyPartnerCategoryCreateWithoutPartnersInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryCreateWithoutPartnersInput)
    create?: DefinedAcademyPartnerCategoryCreateWithoutPartnersInput;

    @Field(() => DefinedAcademyPartnerCategoryCreateOrConnectWithoutPartnersInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryCreateOrConnectWithoutPartnersInput)
    connectOrCreate?: DefinedAcademyPartnerCategoryCreateOrConnectWithoutPartnersInput;

    @Field(() => DefinedAcademyPartnerCategoryWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyPartnerCategoryWhereUniqueInput, 'id' | 'academyId_slug'>;
}
