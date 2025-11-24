import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DiscartItemType } from '../prisma/discart-item-type.enum';
import { Float } from '@nestjs/graphql';
import { DiscartItemCategory } from '../prisma/discart-item-category.enum';
import { DiscartItemCondition } from '../prisma/discart-item-condition.enum';
import { DiscartItemStatus } from '../prisma/discart-item-status.enum';

@ObjectType()
export class DiscartItemMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DiscartItemType, {nullable:true})
    type?: keyof typeof DiscartItemType;

    @Field(() => Float, {nullable:true})
    price?: number;

    @Field(() => DiscartItemCategory, {nullable:true})
    category?: keyof typeof DiscartItemCategory;

    @Field(() => DiscartItemCondition, {nullable:true})
    condition?: keyof typeof DiscartItemCondition;

    @Field(() => DiscartItemStatus, {nullable:true})
    status?: keyof typeof DiscartItemStatus;

    @Field(() => String, {nullable:true})
    contactPhone?: string;

    @Field(() => Int, {nullable:true})
    createdById?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
