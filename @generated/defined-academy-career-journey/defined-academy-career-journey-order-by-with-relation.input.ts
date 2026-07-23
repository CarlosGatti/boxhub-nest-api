import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyOrderByWithRelationInput } from '../defined-academy/defined-academy-order-by-with-relation.input';
import { DefinedAcademyCareerStageOrderByRelationAggregateInput } from '../defined-academy-career-stage/defined-academy-career-stage-order-by-relation-aggregate.input';
import { DefinedAcademyUserCareerProfileOrderByRelationAggregateInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-order-by-relation-aggregate.input';

@InputType()
export class DefinedAcademyCareerJourneyOrderByWithRelationInput {

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

    @Field(() => DefinedAcademyOrderByWithRelationInput, {nullable:true})
    academy?: DefinedAcademyOrderByWithRelationInput;

    @Field(() => DefinedAcademyCareerStageOrderByRelationAggregateInput, {nullable:true})
    stages?: DefinedAcademyCareerStageOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyUserCareerProfileOrderByRelationAggregateInput, {nullable:true})
    profiles?: DefinedAcademyUserCareerProfileOrderByRelationAggregateInput;
}
