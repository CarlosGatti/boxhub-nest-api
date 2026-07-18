import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerScalarWhereInput } from './defined-academy-partner-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerUpdateManyMutationInput } from './defined-academy-partner-update-many-mutation.input';

@InputType()
export class DefinedAcademyPartnerUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => DefinedAcademyPartnerScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerScalarWhereInput)
    where!: DefinedAcademyPartnerScalarWhereInput;

    @Field(() => DefinedAcademyPartnerUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyPartnerUpdateManyMutationInput)
    data!: DefinedAcademyPartnerUpdateManyMutationInput;
}
