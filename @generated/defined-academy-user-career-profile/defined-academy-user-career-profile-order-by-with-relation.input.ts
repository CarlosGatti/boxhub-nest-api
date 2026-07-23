import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { DefinedAcademyOrderByWithRelationInput } from '../defined-academy/defined-academy-order-by-with-relation.input';
import { DefinedAcademyCareerJourneyOrderByWithRelationInput } from '../defined-academy-career-journey/defined-academy-career-journey-order-by-with-relation.input';
import { DefinedAcademyCareerStageOrderByWithRelationInput } from '../defined-academy-career-stage/defined-academy-career-stage-order-by-with-relation.input';
import { DefinedAcademyUserCareerStageCompletionOrderByRelationAggregateInput } from '../defined-academy-user-career-stage-completion/defined-academy-user-career-stage-completion-order-by-relation-aggregate.input';

@InputType()
export class DefinedAcademyUserCareerProfileOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => DefinedAcademyOrderByWithRelationInput, {nullable:true})
    academy?: DefinedAcademyOrderByWithRelationInput;

    @Field(() => DefinedAcademyCareerJourneyOrderByWithRelationInput, {nullable:true})
    journey?: DefinedAcademyCareerJourneyOrderByWithRelationInput;

    @Field(() => DefinedAcademyCareerStageOrderByWithRelationInput, {nullable:true})
    currentStage?: DefinedAcademyCareerStageOrderByWithRelationInput;

    @Field(() => DefinedAcademyUserCareerStageCompletionOrderByRelationAggregateInput, {nullable:true})
    completions?: DefinedAcademyUserCareerStageCompletionOrderByRelationAggregateInput;
}
