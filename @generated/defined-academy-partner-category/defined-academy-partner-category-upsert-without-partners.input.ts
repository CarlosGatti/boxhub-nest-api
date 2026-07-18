import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryUpdateWithoutPartnersInput } from './defined-academy-partner-category-update-without-partners.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryCreateWithoutPartnersInput } from './defined-academy-partner-category-create-without-partners.input';
import { DefinedAcademyPartnerCategoryWhereInput } from './defined-academy-partner-category-where.input';

@InputType()
export class DefinedAcademyPartnerCategoryUpsertWithoutPartnersInput {

    @Field(() => DefinedAcademyPartnerCategoryUpdateWithoutPartnersInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryUpdateWithoutPartnersInput)
    update!: DefinedAcademyPartnerCategoryUpdateWithoutPartnersInput;

    @Field(() => DefinedAcademyPartnerCategoryCreateWithoutPartnersInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryCreateWithoutPartnersInput)
    create!: DefinedAcademyPartnerCategoryCreateWithoutPartnersInput;

    @Field(() => DefinedAcademyPartnerCategoryWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereInput)
    where?: DefinedAcademyPartnerCategoryWhereInput;
}
