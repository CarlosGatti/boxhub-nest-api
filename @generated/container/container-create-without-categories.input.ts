import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyCreateNestedOneWithoutContainersInput } from '../family/family-create-nested-one-without-containers.input';
import { ItemCreateNestedManyWithoutContainerInput } from '../item/item-create-nested-many-without-container.input';

@InputType()
export class ContainerCreateWithoutCategoriesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    qrCode!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => FamilyCreateNestedOneWithoutContainersInput, {nullable:false})
    family!: FamilyCreateNestedOneWithoutContainersInput;

    @Field(() => ItemCreateNestedManyWithoutContainerInput, {nullable:true})
    items?: ItemCreateNestedManyWithoutContainerInput;
}
