import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressCountAggregate } from './defined-academy-lesson-progress-count-aggregate.output';
import { DefinedAcademyLessonProgressAvgAggregate } from './defined-academy-lesson-progress-avg-aggregate.output';
import { DefinedAcademyLessonProgressSumAggregate } from './defined-academy-lesson-progress-sum-aggregate.output';
import { DefinedAcademyLessonProgressMinAggregate } from './defined-academy-lesson-progress-min-aggregate.output';
import { DefinedAcademyLessonProgressMaxAggregate } from './defined-academy-lesson-progress-max-aggregate.output';

@ObjectType()
export class AggregateDefinedAcademyLessonProgress {

    @Field(() => DefinedAcademyLessonProgressCountAggregate, {nullable:true})
    _count?: DefinedAcademyLessonProgressCountAggregate;

    @Field(() => DefinedAcademyLessonProgressAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyLessonProgressAvgAggregate;

    @Field(() => DefinedAcademyLessonProgressSumAggregate, {nullable:true})
    _sum?: DefinedAcademyLessonProgressSumAggregate;

    @Field(() => DefinedAcademyLessonProgressMinAggregate, {nullable:true})
    _min?: DefinedAcademyLessonProgressMinAggregate;

    @Field(() => DefinedAcademyLessonProgressMaxAggregate, {nullable:true})
    _max?: DefinedAcademyLessonProgressMaxAggregate;
}
