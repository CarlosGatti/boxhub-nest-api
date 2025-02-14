import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContainerCreateNestedManyWithoutFamilyInput } from '../container/container-create-nested-many-without-family.input';

@InputType()
export class FamilyCreateWithoutMembersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ContainerCreateNestedManyWithoutFamilyInput, {nullable:true})
    containers?: ContainerCreateNestedManyWithoutFamilyInput;
}
