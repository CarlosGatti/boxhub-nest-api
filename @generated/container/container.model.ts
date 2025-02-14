import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Family } from '../family/family.model';
import { Category } from '../category/category.model';
import { Item } from '../item/item.model';
import { ContainerCount } from './container-count.output';

@ObjectType()
export class Container {

    @Field(() => ID, {nullable:false})
    id!: number;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Family, {nullable:false})
    family?: Family;

    @Field(() => [Category], {nullable:true})
    categories?: Array<Category>;

    @Field(() => [Item], {nullable:true})
    items?: Array<Item>;

    @Field(() => ContainerCount, {nullable:false})
    _count?: ContainerCount;
}
