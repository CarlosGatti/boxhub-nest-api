import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressWhereInput } from './defined-academy-lesson-progress-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressOrderByWithAggregationInput } from './defined-academy-lesson-progress-order-by-with-aggregation.input';
import { DefinedAcademyLessonProgressScalarFieldEnum } from './defined-academy-lesson-progress-scalar-field.enum';
import { DefinedAcademyLessonProgressScalarWhereWithAggregatesInput } from './defined-academy-lesson-progress-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressCountAggregateInput } from './defined-academy-lesson-progress-count-aggregate.input';
import { DefinedAcademyLessonProgressAvgAggregateInput } from './defined-academy-lesson-progress-avg-aggregate.input';
import { DefinedAcademyLessonProgressSumAggregateInput } from './defined-academy-lesson-progress-sum-aggregate.input';
import { DefinedAcademyLessonProgressMinAggregateInput } from './defined-academy-lesson-progress-min-aggregate.input';
import { DefinedAcademyLessonProgressMaxAggregateInput } from './defined-academy-lesson-progress-max-aggregate.input';

@ArgsType()
export class DefinedAcademyLessonProgressGroupByArgs {

    @Field(() => DefinedAcademyLessonProgressWhereInput, {nullable:true})
    @Type(() => DefinedAcademyLessonProgressWhereInput)
    where?: DefinedAcademyLessonProgressWhereInput;

    @Field(() => [DefinedAcademyLessonProgressOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyLessonProgressOrderByWithAggregationInput>;

    @Field(() => [DefinedAcademyLessonProgressScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedAcademyLessonProgressScalarFieldEnum>;

    @Field(() => DefinedAcademyLessonProgressScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedAcademyLessonProgressScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyLessonProgressCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyLessonProgressCountAggregateInput;

    @Field(() => DefinedAcademyLessonProgressAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyLessonProgressAvgAggregateInput;

    @Field(() => DefinedAcademyLessonProgressSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyLessonProgressSumAggregateInput;

    @Field(() => DefinedAcademyLessonProgressMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyLessonProgressMinAggregateInput;

    @Field(() => DefinedAcademyLessonProgressMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyLessonProgressMaxAggregateInput;
}
