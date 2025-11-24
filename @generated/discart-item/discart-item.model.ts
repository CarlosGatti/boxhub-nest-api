import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { DiscartItemType } from '../prisma/discart-item-type.enum';
import { Float } from '@nestjs/graphql';
import { DiscartItemCategory } from '../prisma/discart-item-category.enum';
import { DiscartItemCondition } from '../prisma/discart-item-condition.enum';
import { DiscartItemStatus } from '../prisma/discart-item-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class DiscartItem {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => DiscartItemType, {nullable:false})
    type!: keyof typeof DiscartItemType;

    @Field(() => Float, {nullable:true})
    price!: number | null;

    @Field(() => DiscartItemCategory, {nullable:false,defaultValue:'OTHER'})
    category!: keyof typeof DiscartItemCategory;

    @Field(() => DiscartItemCondition, {nullable:false})
    condition!: keyof typeof DiscartItemCondition;

    @Field(() => DiscartItemStatus, {nullable:false,defaultValue:'ACTIVE'})
    status!: keyof typeof DiscartItemStatus;

    @Field(() => [String], {nullable:true})
    imageUrls!: Array<string>;

    @Field(() => GraphQLJSON, {nullable:true})
    pickupAddress!: any | null;

    @Field(() => String, {nullable:false})
    contactPhone!: string;

    @Field(() => Int, {nullable:false})
    createdById!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    createdBy?: User;
}
