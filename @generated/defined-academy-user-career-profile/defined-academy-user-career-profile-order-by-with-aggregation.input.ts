import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyUserCareerProfileCountOrderByAggregateInput } from './defined-academy-user-career-profile-count-order-by-aggregate.input';
import { DefinedAcademyUserCareerProfileAvgOrderByAggregateInput } from './defined-academy-user-career-profile-avg-order-by-aggregate.input';
import { DefinedAcademyUserCareerProfileMaxOrderByAggregateInput } from './defined-academy-user-career-profile-max-order-by-aggregate.input';
import { DefinedAcademyUserCareerProfileMinOrderByAggregateInput } from './defined-academy-user-career-profile-min-order-by-aggregate.input';
import { DefinedAcademyUserCareerProfileSumOrderByAggregateInput } from './defined-academy-user-career-profile-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyUserCareerProfileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    journeyId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    currentStageId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyUserCareerProfileCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyUserCareerProfileCountOrderByAggregateInput;

    @Field(() => DefinedAcademyUserCareerProfileAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyUserCareerProfileAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyUserCareerProfileMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyUserCareerProfileMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyUserCareerProfileMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyUserCareerProfileMinOrderByAggregateInput;

    @Field(() => DefinedAcademyUserCareerProfileSumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyUserCareerProfileSumOrderByAggregateInput;
}
