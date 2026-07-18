import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedAcademyModuleOrderByWithRelationInput } from '../defined-academy-module/defined-academy-module-order-by-with-relation.input';
import { DefinedAcademyResourceOrderByRelationAggregateInput } from '../defined-academy-resource/defined-academy-resource-order-by-relation-aggregate.input';
import { DefinedAcademyLessonProgressOrderByRelationAggregateInput } from '../defined-academy-lesson-progress/defined-academy-lesson-progress-order-by-relation-aggregate.input';

@InputType()
export class DefinedAcademyLessonOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    moduleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    summary?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    lessonType?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    videoUrl?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    videoProvider?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    videoDurationSeconds?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    bodyContent?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visibility?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPreview?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    publishedAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedAcademyModuleOrderByWithRelationInput, {nullable:true})
    module?: DefinedAcademyModuleOrderByWithRelationInput;

    @Field(() => DefinedAcademyResourceOrderByRelationAggregateInput, {nullable:true})
    resources?: DefinedAcademyResourceOrderByRelationAggregateInput;

    @Field(() => DefinedAcademyLessonProgressOrderByRelationAggregateInput, {nullable:true})
    progress?: DefinedAcademyLessonProgressOrderByRelationAggregateInput;
}
