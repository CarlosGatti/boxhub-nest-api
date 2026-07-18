import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyPartnerUncheckedCreateNestedManyWithoutCategoryInput } from '../defined-academy-partner/defined-academy-partner-unchecked-create-nested-many-without-category.input';

@InputType()
export class DefinedAcademyPartnerCategoryUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

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

    @Field(() => DefinedAcademyPartnerUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    partners?: DefinedAcademyPartnerUncheckedCreateNestedManyWithoutCategoryInput;
}
