import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ContainerCreateNestedOneWithoutItemsInput } from '../container/container-create-nested-one-without-items.input';

@InputType()
export class ItemCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => Boolean, {nullable:true})
    donatedToDiscartMe?: boolean;

    @Field(() => Int, {nullable:true})
    discartItemId?: number;

    @Field(() => Date, {nullable:true})
    donatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ContainerCreateNestedOneWithoutItemsInput, {nullable:false})
    container!: ContainerCreateNestedOneWithoutItemsInput;
}
