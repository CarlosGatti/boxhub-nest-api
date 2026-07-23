import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyCareerJourneyOrderByWithRelationInput } from '../defined-academy-career-journey/defined-academy-career-journey-order-by-with-relation.input';
import { DefinedAcademyCareerStageContentOrderByRelationAggregateInput } from '../defined-academy-career-stage-content/defined-academy-career-stage-content-order-by-relation-aggregate.input';
import { DefinedAcademyUserCareerProfileOrderByRelationAggregateInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-order-by-relation-aggregate.input';
import { DefinedAcademyUserCareerStageCompletionOrderByRelationAggregateInput } from '../defined-academy-user-career-stage-completion/defined-academy-user-career-stage-completion-order-by-relation-aggregate.input';

@InputType()
export class DefinedAcademyCareerStageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    journeyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    summary?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    iconKey?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyCareerJourneyOrderByWithRelationInput, {nullable:true})
    journey?: DefinedAcademyCareerJourneyOrderByWithRelationInput;

    @Field(() => DefinedAcademyCareerStageContentOrderByRelationAggregateInput, {nullable:true})
    contentLinks?: DefinedAcademyCareerStageContentOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyUserCareerProfileOrderByRelationAggregateInput, {nullable:true})
    currentProfiles?: DefinedAcademyUserCareerProfileOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionOrderByRelationAggregateInput, {nullable:true})
    completions?: DefinedAcademyUserCareerStageCompletionOrderByRelationAggregateInput;
}
