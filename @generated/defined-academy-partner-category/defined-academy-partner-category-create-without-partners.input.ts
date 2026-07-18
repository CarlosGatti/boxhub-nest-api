import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCreateNestedOneWithoutPartnerCategoriesInput } from '../defined-academy/defined-academy-create-nested-one-without-partner-categories.input';

@InputType()
export class DefinedAcademyPartnerCategoryCreateWithoutPartnersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    sortOrder?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyCreateNestedOneWithoutPartnerCategoriesInput, {nullable:false})
    academy!: DefinedAcademyCreateNestedOneWithoutPartnerCategoriesInput;
}
