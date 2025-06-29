import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { InsuranceCountOrderByAggregateInput } from './insurance-count-order-by-aggregate.input';
import { InsuranceAvgOrderByAggregateInput } from './insurance-avg-order-by-aggregate.input';
import { InsuranceMaxOrderByAggregateInput } from './insurance-max-order-by-aggregate.input';
import { InsuranceMinOrderByAggregateInput } from './insurance-min-order-by-aggregate.input';
import { InsuranceSumOrderByAggregateInput } from './insurance-sum-order-by-aggregate.input';

@InputType()
export class InsuranceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subcontractorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    company?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    documentUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => InsuranceCountOrderByAggregateInput, {nullable:true})
    _count?: InsuranceCountOrderByAggregateInput;

    @Field(() => InsuranceAvgOrderByAggregateInput, {nullable:true})
    _avg?: InsuranceAvgOrderByAggregateInput;

    @Field(() => InsuranceMaxOrderByAggregateInput, {nullable:true})
    _max?: InsuranceMaxOrderByAggregateInput;

    @Field(() => InsuranceMinOrderByAggregateInput, {nullable:true})
    _min?: InsuranceMinOrderByAggregateInput;

    @Field(() => InsuranceSumOrderByAggregateInput, {nullable:true})
    _sum?: InsuranceSumOrderByAggregateInput;
}
