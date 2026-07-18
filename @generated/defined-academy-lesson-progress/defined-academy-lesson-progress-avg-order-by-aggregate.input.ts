import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DefinedAcademyLessonProgressAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enrollmentId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lessonId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    progressPercentage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastPositionSeconds?: keyof typeof SortOrder;
}
