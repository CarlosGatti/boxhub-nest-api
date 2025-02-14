import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ContainerUncheckedCreateNestedManyWithoutCategoriesInput } from '../container/container-unchecked-create-nested-many-without-categories.input';

@InputType()
export class CategoryUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ContainerUncheckedCreateNestedManyWithoutCategoriesInput, {nullable:true})
    containers?: ContainerUncheckedCreateNestedManyWithoutCategoriesInput;
}
