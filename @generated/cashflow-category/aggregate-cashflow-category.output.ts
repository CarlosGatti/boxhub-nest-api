import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CashflowCategoryCountAggregate } from './cashflow-category-count-aggregate.output';
import { CashflowCategoryAvgAggregate } from './cashflow-category-avg-aggregate.output';
import { CashflowCategorySumAggregate } from './cashflow-category-sum-aggregate.output';
import { CashflowCategoryMinAggregate } from './cashflow-category-min-aggregate.output';
import { CashflowCategoryMaxAggregate } from './cashflow-category-max-aggregate.output';

@ObjectType()
export class AggregateCashflowCategory {

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
