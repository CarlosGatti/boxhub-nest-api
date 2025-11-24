import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DiscartItemType } from '../prisma/discart-item-type.enum';
import { Float } from '@nestjs/graphql';
import { DiscartItemCategory } from '../prisma/discart-item-category.enum';
import { DiscartItemCondition } from '../prisma/discart-item-condition.enum';
import { DiscartItemStatus } from '../prisma/discart-item-status.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { DiscartItemCountAggregate } from './discart-item-count-aggregate.output';
import { DiscartItemAvgAggregate } from './discart-item-avg-aggregate.output';
import { DiscartItemSumAggregate } from './discart-item-sum-aggregate.output';
import { DiscartItemMinAggregate } from './discart-item-min-aggregate.output';
import { DiscartItemMaxAggregate } from './discart-item-max-aggregate.output';

@ObjectType()
export class DiscartItemGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => DiscartItemType, {nullable:false})
    type!: keyof typeof DiscartItemType;

    @Field(() => Float, {nullable:true})
    price?: number;

    @Field(() => DiscartItemCategory, {nullable:false})
    category!: keyof typeof DiscartItemCategory;

    @Field(() => DiscartItemCondition, {nullable:false})
    condition!: keyof typeof DiscartItemCondition;

    @Field(() => DiscartItemStatus, {nullable:false})
    status!: keyof typeof DiscartItemStatus;

    @Field(() => [String], {nullable:true})
    imageUrls?: Array<string>;

    @Field(() => GraphQLJSON, {nullable:true})
    pickupAddress?: any;

    @Field(() => String, {nullable:false})
    contactPhone!: string;

    @Field(() => Int, {nullable:false})
    createdById!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DiscartItemCountAggregate, {nullable:true})
    _count?: DiscartItemCountAggregate;

    @Field(() => DiscartItemAvgAggregate, {nullable:true})
    _avg?: DiscartItemAvgAggregate;

    @Field(() => DiscartItemSumAggregate, {nullable:true})
    _sum?: DiscartItemSumAggregate;

    @Field(() => DiscartItemMinAggregate, {nullable:true})
    _min?: DiscartItemMinAggregate;

    @Field(() => DiscartItemMaxAggregate, {nullable:true})
    _max?: DiscartItemMaxAggregate;
}
