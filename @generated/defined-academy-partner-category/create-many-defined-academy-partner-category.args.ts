import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryCreateManyInput } from './defined-academy-partner-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyPartnerCategoryArgs {

    @Field(() => [DefinedAcademyPartnerCategoryCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryCreateManyInput)
    data!: Array<DefinedAcademyPartnerCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
