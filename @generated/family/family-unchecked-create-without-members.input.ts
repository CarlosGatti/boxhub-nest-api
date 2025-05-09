import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ContainerUncheckedCreateNestedManyWithoutFamilyInput } from '../container/container-unchecked-create-nested-many-without-family.input';

@InputType()
export class FamilyUncheckedCreateWithoutMembersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ContainerUncheckedCreateNestedManyWithoutFamilyInput, {nullable:true})
    containers?: ContainerUncheckedCreateNestedManyWithoutFamilyInput;
}
