import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DefinedAcademyLessonAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    moduleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    videoDurationSeconds?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sortOrder?: keyof typeof SortOrder;
}
