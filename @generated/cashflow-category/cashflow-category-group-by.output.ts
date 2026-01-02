import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CashflowType } from '../prisma/cashflow-type.enum';
import { CashflowCategoryCountAggregate } from './cashflow-category-count-aggregate.output';
import { CashflowCategoryAvgAggregate } from './cashflow-category-avg-aggregate.output';
import { CashflowCategorySumAggregate } from './cashflow-category-sum-aggregate.output';
import { CashflowCategoryMinAggregate } from './cashflow-category-min-aggregate.output';
import { CashflowCategoryMaxAggregate } from './cashflow-category-max-aggregate.output';

@ObjectType()
export class CashflowCategoryGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CashflowType, {nullable:false})
    type!: keyof typeof CashflowType;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => CashflowCategoryCountAggregate, {nullable:true})
    _count?: CashflowCategoryCountAggregate;

    @Field(() => CashflowCategoryAvgAggregate, {nullable:true})
    _avg?: CashflowCategoryAvgAggregate;

    @Field(() => CashflowCategorySumAggregate, {nullable:true})
    _sum?: CashflowCategorySumAggregate;

    @Field(() => CashflowCategoryMinAggregate, {nullable:true})
    _min?: CashflowCategoryMinAggregate;

    @Field(() => CashflowCategoryMaxAggregate, {nullable:true})
    _max?: CashflowCategoryMaxAggregate;
}
