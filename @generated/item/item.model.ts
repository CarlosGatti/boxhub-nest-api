import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Container } from '../container/container.model';

@ObjectType()
export class Item {

    @Field(() => ID, {nullable:false})
    id!: number;

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

    @Field(() => Int, {nullable:false})
    containerId!: number;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    donatedToDiscartMe!: boolean;

    @Field(() => Int, {nullable:true})
    discartItemId!: number | null;

    @Field(() => Date, {nullable:true})
    donatedAt!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Container, {nullable:false})
    container?: Container;
}
