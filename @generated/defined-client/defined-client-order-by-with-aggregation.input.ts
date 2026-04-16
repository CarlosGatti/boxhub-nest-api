import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedClientCountOrderByAggregateInput } from './defined-client-count-order-by-aggregate.input';
import { DefinedClientAvgOrderByAggregateInput } from './defined-client-avg-order-by-aggregate.input';
import { DefinedClientMaxOrderByAggregateInput } from './defined-client-max-order-by-aggregate.input';
import { DefinedClientMinOrderByAggregateInput } from './defined-client-min-order-by-aggregate.input';
import { DefinedClientSumOrderByAggregateInput } from './defined-client-sum-order-by-aggregate.input';

@InputType()
export class DefinedClientOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    companyName?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    legalName?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    contactName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    phone?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    website?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    instagram?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    facebook?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    addressLine1?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    addressLine2?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    city?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    state?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    postalCode?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    country?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    businessType?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    serviceArea?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    yearsInBusiness?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedClientCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedClientCountOrderByAggregateInput;

    @Field(() => DefinedClientAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedClientAvgOrderByAggregateInput;

    @Field(() => DefinedClientMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedClientMaxOrderByAggregateInput;

    @Field(() => DefinedClientMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedClientMinOrderByAggregateInput;

    @Field(() => DefinedClientSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedClientSumOrderByAggregateInput;
}
