import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCreateNestedOneWithoutReceivedMaterialsInput } from '../user/user-create-nested-one-without-received-materials.input';

@InputType()
export class MaterialEntryCreateWithoutProjectInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    supplier!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Date, {nullable:false})
    receivedAt!: Date | string;

    @Field(() => String, {nullable:true})
    note?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    imageUrls?: any;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutReceivedMaterialsInput, {nullable:true})
    receivedBy?: UserCreateNestedOneWithoutReceivedMaterialsInput;
}
