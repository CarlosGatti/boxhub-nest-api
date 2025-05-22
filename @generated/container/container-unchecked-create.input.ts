import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CategoryUncheckedCreateNestedManyWithoutContainersInput } from '../category/category-unchecked-create-nested-many-without-containers.input';
import { ItemUncheckedCreateNestedManyWithoutContainerInput } from '../item/item-unchecked-create-nested-many-without-container.input';

@InputType()
export class ContainerUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    qrCode!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Int, {nullable:false})
    storageId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CategoryUncheckedCreateNestedManyWithoutContainersInput, {nullable:true})
    categories?: CategoryUncheckedCreateNestedManyWithoutContainersInput;

    @Field(() => ItemUncheckedCreateNestedManyWithoutContainerInput, {nullable:true})
    items?: ItemUncheckedCreateNestedManyWithoutContainerInput;
}
