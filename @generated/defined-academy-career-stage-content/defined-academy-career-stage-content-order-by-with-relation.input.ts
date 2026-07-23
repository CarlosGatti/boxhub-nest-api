import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyCareerStageOrderByWithRelationInput } from '../defined-academy-career-stage/defined-academy-career-stage-order-by-with-relation.input';
import { DefinedAcademyCourseOrderByWithRelationInput } from '../defined-academy-course/defined-academy-course-order-by-with-relation.input';
import { DefinedAcademyResourceOrderByWithRelationInput } from '../defined-academy-resource/defined-academy-resource-order-by-with-relation.input';

@InputType()
export class DefinedAcademyCareerStageContentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stageId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contentType?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    courseId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    resourceId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    label?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyCareerStageOrderByWithRelationInput, {nullable:true})
    stage?: DefinedAcademyCareerStageOrderByWithRelationInput;

    @Field(() => DefinedAcademyCourseOrderByWithRelationInput, {nullable:true})
    course?: DefinedAcademyCourseOrderByWithRelationInput;

    @Field(() => DefinedAcademyResourceOrderByWithRelationInput, {nullable:true})
    resource?: DefinedAcademyResourceOrderByWithRelationInput;
}
