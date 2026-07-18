import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyEnrollmentCountOrderByAggregateInput } from './defined-academy-enrollment-count-order-by-aggregate.input';
import { DefinedAcademyEnrollmentAvgOrderByAggregateInput } from './defined-academy-enrollment-avg-order-by-aggregate.input';
import { DefinedAcademyEnrollmentMaxOrderByAggregateInput } from './defined-academy-enrollment-max-order-by-aggregate.input';
import { DefinedAcademyEnrollmentMinOrderByAggregateInput } from './defined-academy-enrollment-min-order-by-aggregate.input';
import { DefinedAcademyEnrollmentSumOrderByAggregateInput } from './defined-academy-enrollment-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyEnrollmentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courseId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enrolledAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    startedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    completedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    lastAccessedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyEnrollmentCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyEnrollmentCountOrderByAggregateInput;

    @Field(() => DefinedAcademyEnrollmentAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyEnrollmentAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyEnrollmentMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyEnrollmentMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyEnrollmentMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyEnrollmentMinOrderByAggregateInput;

    @Field(() => DefinedAcademyEnrollmentSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyEnrollmentSumOrderByAggregateInput;
}
