import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { CashflowCategoryOrderByWithRelationInput } from '../cashflow-category/cashflow-category-order-by-with-relation.input';

@InputType()
export class CashflowEntryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    source?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    date?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => CashflowCategoryOrderByWithRelationInput, {nullable:true})
    @Type(() => CashflowCategoryOrderByWithRelationInput)
    category?: CashflowCategoryOrderByWithRelationInput;
}
