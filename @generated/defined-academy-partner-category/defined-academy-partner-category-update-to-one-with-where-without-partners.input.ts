import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryWhereInput } from './defined-academy-partner-category-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryUpdateWithoutPartnersInput } from './defined-academy-partner-category-update-without-partners.input';

@InputType()
export class DefinedAcademyPartnerCategoryUpdateToOneWithWhereWithoutPartnersInput {

    @Field(() => DefinedAcademyPartnerCategoryWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereInput)
    where?: DefinedAcademyPartnerCategoryWhereInput;

    @Field(() => DefinedAcademyPartnerCategoryUpdateWithoutPartnersInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryUpdateWithoutPartnersInput)
    data!: DefinedAcademyPartnerCategoryUpdateWithoutPartnersInput;
}
