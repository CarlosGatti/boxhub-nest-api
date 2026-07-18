import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryCreateWithoutPartnersInput } from './defined-academy-partner-category-create-without-partners.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryCreateOrConnectWithoutPartnersInput } from './defined-academy-partner-category-create-or-connect-without-partners.input';
import { DefinedAcademyPartnerCategoryUpsertWithoutPartnersInput } from './defined-academy-partner-category-upsert-without-partners.input';
import { DefinedAcademyPartnerCategoryWhereInput } from './defined-academy-partner-category-where.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerCategoryWhereUniqueInput } from './defined-academy-partner-category-where-unique.input';
import { DefinedAcademyPartnerCategoryUpdateToOneWithWhereWithoutPartnersInput } from './defined-academy-partner-category-update-to-one-with-where-without-partners.input';

@InputType()
export class DefinedAcademyPartnerCategoryUpdateOneWithoutPartnersNestedInput {

    @Field(() => DefinedAcademyPartnerCategoryCreateWithoutPartnersInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryCreateWithoutPartnersInput)
    create?: DefinedAcademyPartnerCategoryCreateWithoutPartnersInput;

    @Field(() => DefinedAcademyPartnerCategoryCreateOrConnectWithoutPartnersInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryCreateOrConnectWithoutPartnersInput)
    connectOrCreate?: DefinedAcademyPartnerCategoryCreateOrConnectWithoutPartnersInput;

    @Field(() => DefinedAcademyPartnerCategoryUpsertWithoutPartnersInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryUpsertWithoutPartnersInput)
    upsert?: DefinedAcademyPartnerCategoryUpsertWithoutPartnersInput;

    @Field(() => DefinedAcademyPartnerCategoryWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereInput)
    disconnect?: DefinedAcademyPartnerCategoryWhereInput;

    @Field(() => DefinedAcademyPartnerCategoryWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereInput)
    delete?: DefinedAcademyPartnerCategoryWhereInput;

    @Field(() => DefinedAcademyPartnerCategoryWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyPartnerCategoryWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyPartnerCategoryUpdateToOneWithWhereWithoutPartnersInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryUpdateToOneWithWhereWithoutPartnersInput)
    update?: DefinedAcademyPartnerCategoryUpdateToOneWithWhereWithoutPartnersInput;
}
