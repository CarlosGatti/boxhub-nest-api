import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCategoryUpdateManyMutationInput } from './defined-academy-partner-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCategoryWhereInput } from './defined-academy-partner-category-where.input';

@ArgsType()
export class UpdateManyDefinedAcademyPartnerCategoryArgs {

    @Field(() => DefinedAcademyPartnerCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerCategoryUpdateManyMutationInput)
    data!: DefinedAcademyPartnerCategoryUpdateManyMutationInput;

    @Field(() => DefinedAcademyPartnerCategoryWhereInput, {nullable:true})
    @Type(() => DefinedAcademyPartnerCategoryWhereInput)
    where?: DefinedAcademyPartnerCategoryWhereInput;
}
