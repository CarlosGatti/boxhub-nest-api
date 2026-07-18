import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryCreateInput } from './defined-academy-partner-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyPartnerCategoryArgs {

    @Field(() => DefinedAcademyPartnerCategoryCreateInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryCreateInput)
    data!: DefinedAcademyPartnerCategoryCreateInput;
}
