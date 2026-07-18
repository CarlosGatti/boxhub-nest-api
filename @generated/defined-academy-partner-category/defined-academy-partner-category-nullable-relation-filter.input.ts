import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryWhereInput } from './defined-academy-partner-category-where.input';

@InputType()
export class DefinedAcademyPartnerCategoryNullableRelationFilter {

    @Field(() => DefinedAcademyPartnerCategoryWhereInput, {nullable:true})
    is?: DefinedAcademyPartnerCategoryWhereInput;

    @Field(() => DefinedAcademyPartnerCategoryWhereInput, {nullable:true})
    isNot?: DefinedAcademyPartnerCategoryWhereInput;
}
