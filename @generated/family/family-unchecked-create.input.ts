import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutFamilyInput } from '../user/user-unchecked-create-nested-many-without-family.input';
import { ContainerUncheckedCreateNestedManyWithoutFamilyInput } from '../container/container-unchecked-create-nested-many-without-family.input';

@InputType()
export class FamilyUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutFamilyInput, {nullable:true})
    members?: UserUncheckedCreateNestedManyWithoutFamilyInput;

    @Field(() => ContainerUncheckedCreateNestedManyWithoutFamilyInput, {nullable:true})
    containers?: ContainerUncheckedCreateNestedManyWithoutFamilyInput;
}
