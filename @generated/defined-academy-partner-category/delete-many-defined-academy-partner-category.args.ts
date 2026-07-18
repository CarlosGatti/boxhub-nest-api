import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryWhereInput } from './defined-academy-partner-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedAcademyPartnerCategoryArgs {

    @Field(() => DefinedAcademyPartnerCategoryWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereInput)
    where?: DefinedAcademyPartnerCategoryWhereInput;
}
