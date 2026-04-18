import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedIntakeFormCountOrderByAggregateInput } from './defined-intake-form-count-order-by-aggregate.input';
import { DefinedIntakeFormAvgOrderByAggregateInput } from './defined-intake-form-avg-order-by-aggregate.input';
import { DefinedIntakeFormMaxOrderByAggregateInput } from './defined-intake-form-max-order-by-aggregate.input';
import { DefinedIntakeFormMinOrderByAggregateInput } from './defined-intake-form-min-order-by-aggregate.input';
import { DefinedIntakeFormSumOrderByAggregateInput } from './defined-intake-form-sum-order-by-aggregate.input';

@InputType()
export class DefinedIntakeFormOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    projectId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    formType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    shareToken?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    shareTokenCreatedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    shareTokenExpiresAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    shareRevokedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    submittedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedIntakeFormCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedIntakeFormCountOrderByAggregateInput;

    @Field(() => DefinedIntakeFormAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedIntakeFormAvgOrderByAggregateInput;

    @Field(() => DefinedIntakeFormMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedIntakeFormMaxOrderByAggregateInput;

    @Field(() => DefinedIntakeFormMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedIntakeFormMinOrderByAggregateInput;

    @Field(() => DefinedIntakeFormSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedIntakeFormSumOrderByAggregateInput;
}
