import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerCreateNestedManyWithoutCategoriesInput } from '../container/container-create-nested-many-without-categories.input';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ContainerCreateNestedManyWithoutCategoriesInput, {nullable:true})
    containers?: ContainerCreateNestedManyWithoutCategoriesInput;
}
