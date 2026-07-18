import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyLessonWhereInput } from './defined-academy-lesson-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonOrderByWithAggregationInput } from './defined-academy-lesson-order-by-with-aggregation.input';
import { DefinedAcademyLessonScalarFieldEnum } from './defined-academy-lesson-scalar-field.enum';
import { DefinedAcademyLessonScalarWhereWithAggregatesInput } from './defined-academy-lesson-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyLessonCountAggregateInput } from './defined-academy-lesson-count-aggregate.input';
import { DefinedAcademyLessonAvgAggregateInput } from './defined-academy-lesson-avg-aggregate.input';
import { DefinedAcademyLessonSumAggregateInput } from './defined-academy-lesson-sum-aggregate.input';
import { DefinedAcademyLessonMinAggregateInput } from './defined-academy-lesson-min-aggregate.input';
import { DefinedAcademyLessonMaxAggregateInput } from './defined-academy-lesson-max-aggregate.input';

@ArgsType()
export class DefinedAcademyLessonGroupByArgs {

    @Field(() => DefinedAcademyLessonWhereInput, {nullable:true})
    @Type(() => DefinedAcademyLessonWhereInput)
    where?: DefinedAcademyLessonWhereInput;

    @Field(() => [DefinedAcademyLessonOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyLessonOrderByWithAggregationInput>;

    @Field(() => [DefinedAcademyLessonScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DefinedAcademyLessonScalarFieldEnum>;

    @Field(() => DefinedAcademyLessonScalarWhereWithAggregatesInput, {nullable:true})
    having?: DefinedAcademyLessonScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DefinedAcademyLessonCountAggregateInput, {nullable:true})
    _count?: DefinedAcademyLessonCountAggregateInput;

    @Field(() => DefinedAcademyLessonAvgAggregateInput, {nullable:true})
    _avg?: DefinedAcademyLessonAvgAggregateInput;

    @Field(() => DefinedAcademyLessonSumAggregateInput, {nullable:true})
    _sum?: DefinedAcademyLessonSumAggregateInput;

    @Field(() => DefinedAcademyLessonMinAggregateInput, {nullable:true})
    _min?: DefinedAcademyLessonMinAggregateInput;

    @Field(() => DefinedAcademyLessonMaxAggregateInput, {nullable:true})
    _max?: DefinedAcademyLessonMaxAggregateInput;
}
