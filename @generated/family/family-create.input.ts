import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutFamilyInput } from '../user/user-create-nested-many-without-family.input';
import { ContainerCreateNestedManyWithoutFamilyInput } from '../container/container-create-nested-many-without-family.input';

@InputType()
export class FamilyCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutFamilyInput, {nullable:true})
    members?: UserCreateNestedManyWithoutFamilyInput;

    @Field(() => ContainerCreateNestedManyWithoutFamilyInput, {nullable:true})
    containers?: ContainerCreateNestedManyWithoutFamilyInput;
}
