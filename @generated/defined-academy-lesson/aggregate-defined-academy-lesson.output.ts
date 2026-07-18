import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyLessonCountAggregate } from './defined-academy-lesson-count-aggregate.output';
import { DefinedAcademyLessonAvgAggregate } from './defined-academy-lesson-avg-aggregate.output';
import { DefinedAcademyLessonSumAggregate } from './defined-academy-lesson-sum-aggregate.output';
import { DefinedAcademyLessonMinAggregate } from './defined-academy-lesson-min-aggregate.output';
import { DefinedAcademyLessonMaxAggregate } from './defined-academy-lesson-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyLesson {

    @Field(() => DefinedAcademyLessonCountAggregate, {nullable:true})
    _count?: DefinedAcademyLessonCountAggregate;

    @Field(() => DefinedAcademyLessonAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyLessonAvgAggregate;

    @Field(() => DefinedAcademyLessonSumAggregate, {nullable:true})
    _sum?: DefinedAcademyLessonSumAggregate;

    @Field(() => DefinedAcademyLessonMinAggregate, {nullable:true})
    _min?: DefinedAcademyLessonMinAggregate;

    @Field(() => DefinedAcademyLessonMaxAggregate, {nullable:true})
    _max?: DefinedAcademyLessonMaxAggregate;
}
