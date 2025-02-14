import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemUncheckedCreateNestedManyWithoutContainerInput } from '../item/item-unchecked-create-nested-many-without-container.input';

@InputType()
export class ContainerUncheckedCreateWithoutCategoriesInput {

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
    familyId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ItemUncheckedCreateNestedManyWithoutContainerInput, {nullable:true})
    items?: ItemUncheckedCreateNestedManyWithoutContainerInput;
}
