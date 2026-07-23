import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyCareerJourneyCountOrderByAggregateInput } from './defined-academy-career-journey-count-order-by-aggregate.input';
import { DefinedAcademyCareerJourneyAvgOrderByAggregateInput } from './defined-academy-career-journey-avg-order-by-aggregate.input';
import { DefinedAcademyCareerJourneyMaxOrderByAggregateInput } from './defined-academy-career-journey-max-order-by-aggregate.input';
import { DefinedAcademyCareerJourneyMinOrderByAggregateInput } from './defined-academy-career-journey-min-order-by-aggregate.input';
import { DefinedAcademyCareerJourneySumOrderByAggregateInput } from './defined-academy-career-journey-sum-order-by-aggregate.input';

@InputType()
export class DefinedAcademyCareerJourneyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    academyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyCareerJourneyCountOrderByAggregateInput, {nullable:true})
    _count?: DefinedAcademyCareerJourneyCountOrderByAggregateInput;

    @Field(() => DefinedAcademyCareerJourneyAvgOrderByAggregateInput, {nullable:true})
    _avg?: DefinedAcademyCareerJourneyAvgOrderByAggregateInput;

    @Field(() => DefinedAcademyCareerJourneyMaxOrderByAggregateInput, {nullable:true})
    _max?: DefinedAcademyCareerJourneyMaxOrderByAggregateInput;

    @Field(() => DefinedAcademyCareerJourneyMinOrderByAggregateInput, {nullable:true})
    _min?: DefinedAcademyCareerJourneyMinOrderByAggregateInput;

    @Field(() => DefinedAcademyCareerJourneySumOrderByAggregateInput, {nullable:true})
    _sum?: DefinedAcademyCareerJourneySumOrderByAggregateInput;
}
