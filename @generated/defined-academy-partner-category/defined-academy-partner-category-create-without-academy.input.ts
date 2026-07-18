import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyPartnerCreateNestedManyWithoutCategoryInput } from '../defined-academy-partner/defined-academy-partner-create-nested-many-without-category.input';

@InputType()
export class DefinedAcademyPartnerCategoryCreateWithoutAcademyInput {

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

    @Field(() => DefinedAcademyPartnerCreateNestedManyWithoutCategoryInput, {nullable:true})
    partners?: DefinedAcademyPartnerCreateNestedManyWithoutCategoryInput;
}
