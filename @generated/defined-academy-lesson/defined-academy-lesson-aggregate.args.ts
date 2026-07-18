import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyLessonWhereInput } from './defined-academy-lesson-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonOrderByWithRelationInput } from './defined-academy-lesson-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonWhereUniqueInput } from './defined-academy-lesson-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyLessonCountAggregateInput } from './defined-academy-lesson-count-aggregate.input';
import { DefinedAcademyLessonAvgAggregateInput } from './defined-academy-lesson-avg-aggregate.input';
import { DefinedAcademyLessonSumAggregateInput } from './defined-academy-lesson-sum-aggregate.input';
import { DefinedAcademyLessonMinAggregateInput } from './defined-academy-lesson-min-aggregate.input';
import { DefinedAcademyLessonMaxAggregateInput } from './defined-academy-lesson-max-aggregate.input';

@ArgsType()
export class DefinedAcademyLessonAggregateArgs {

    @Field(() => DefinedAcademyLessonWhereInput, {nullable:true})
    @Type(() => DefinedAcademyLessonWhereInput)
    where?: DefinedAcademyLessonWhereInput;

    @Field(() => [DefinedAcademyLessonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyLessonOrderByWithRelationInput>;

    @Field(() => DefinedAcademyLessonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>;

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
