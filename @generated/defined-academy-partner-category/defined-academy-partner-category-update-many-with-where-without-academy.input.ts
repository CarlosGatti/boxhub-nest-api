import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryScalarWhereInput } from './defined-academy-partner-category-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryUpdateManyMutationInput } from './defined-academy-partner-category-update-many-mutation.input';

@InputType()
export class DefinedAcademyPartnerCategoryUpdateManyWithWhereWithoutAcademyInput {

    @Field(() => DefinedAcademyPartnerCategoryScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryScalarWhereInput)
    where!: DefinedAcademyPartnerCategoryScalarWhereInput;

    @Field(() => DefinedAcademyPartnerCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryUpdateManyMutationInput)
    data!: DefinedAcademyPartnerCategoryUpdateManyMutationInput;
}
