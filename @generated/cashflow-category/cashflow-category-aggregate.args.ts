import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CashflowCategoryWhereInput } from './cashflow-category-where.input';
import { Type } from 'class-transformer';
import { CashflowCategoryOrderByWithRelationInput } from './cashflow-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CashflowCategoryWhereUniqueInput } from './cashflow-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CashflowCategoryCountAggregateInput } from './cashflow-category-count-aggregate.input';
import { CashflowCategoryAvgAggregateInput } from './cashflow-category-avg-aggregate.input';
import { CashflowCategorySumAggregateInput } from './cashflow-category-sum-aggregate.input';
import { CashflowCategoryMinAggregateInput } from './cashflow-category-min-aggregate.input';
import { CashflowCategoryMaxAggregateInput } from './cashflow-category-max-aggregate.input';

@ArgsType()
export class CashflowCategoryAggregateArgs {

    @Field(() => CashflowCategoryWhereInput, {nullable:true})
    @Type(() => CashflowCategoryWhereInput)
    where?: CashflowCategoryWhereInput;

    @Field(() => [CashflowCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CashflowCategoryOrderByWithRelationInput>;

    @Field(() => CashflowCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CashflowCategoryWhereUniqueInput, 'id' | 'userId_name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CashflowCategoryCountAggregateInput, {nullable:true})
    _count?: CashflowCategoryCountAggregateInput;

    @Field(() => CashflowCategoryAvgAggregateInput, {nullable:true})
    _avg?: CashflowCategoryAvgAggregateInput;

    @Field(() => CashflowCategorySumAggregateInput, {nullable:true})
    _sum?: CashflowCategorySumAggregateInput;

    @Field(() => CashflowCategoryMinAggregateInput, {nullable:true})
    _min?: CashflowCategoryMinAggregateInput;

    @Field(() => CashflowCategoryMaxAggregateInput, {nullable:true})
    _max?: CashflowCategoryMaxAggregateInput;
}
