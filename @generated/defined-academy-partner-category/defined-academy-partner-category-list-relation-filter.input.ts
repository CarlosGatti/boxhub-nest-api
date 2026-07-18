import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryWhereInput } from './defined-academy-partner-category-where.input';

@InputType()
export class DefinedAcademyPartnerCategoryListRelationFilter {

    @Field(() => DefinedAcademyPartnerCategoryWhereInput, {nullable:true})
    every?: DefinedAcademyPartnerCategoryWhereInput;

    @Field(() => DefinedAcademyPartnerCategoryWhereInput, {nullable:true})
    some?: DefinedAcademyPartnerCategoryWhereInput;

    @Field(() => DefinedAcademyPartnerCategoryWhereInput, {nullable:true})
    none?: DefinedAcademyPartnerCategoryWhereInput;
}
