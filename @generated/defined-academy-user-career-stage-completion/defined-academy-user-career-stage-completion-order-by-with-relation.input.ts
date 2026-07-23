import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyUserCareerProfileOrderByWithRelationInput } from '../defined-academy-user-career-profile/defined-academy-user-career-profile-order-by-with-relation.input';
import { DefinedAcademyCareerStageOrderByWithRelationInput } from '../defined-academy-career-stage/defined-academy-career-stage-order-by-with-relation.input';

@InputType()
export class DefinedAcademyUserCareerStageCompletionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => DefinedAcademyUserCareerProfileOrderByWithRelationInput, {nullable:true})
    profile?: DefinedAcademyUserCareerProfileOrderByWithRelationInput;

    @Field(() => DefinedAcademyCareerStageOrderByWithRelationInput, {nullable:true})
    stage?: DefinedAcademyCareerStageOrderByWithRelationInput;
}
