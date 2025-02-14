import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyCreateNestedOneWithoutContainersInput } from '../family/family-create-nested-one-without-containers.input';
import { CategoryCreateNestedManyWithoutContainersInput } from '../category/category-create-nested-many-without-containers.input';

@InputType()
export class ContainerCreateWithoutItemsInput {

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

    @Field(() => CategoryCreateNestedManyWithoutContainersInput, {nullable:true})
    categories?: CategoryCreateNestedManyWithoutContainersInput;
}
