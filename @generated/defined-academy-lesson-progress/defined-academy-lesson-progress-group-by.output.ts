import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressStatus } from '../prisma/defined-academy-lesson-progress-status.enum';
import { DefinedAcademyLessonProgressCountAggregate } from './defined-academy-lesson-progress-count-aggregate.output';
import { DefinedAcademyLessonProgressAvgAggregate } from './defined-academy-lesson-progress-avg-aggregate.output';
import { DefinedAcademyLessonProgressSumAggregate } from './defined-academy-lesson-progress-sum-aggregate.output';
import { DefinedAcademyLessonProgressMinAggregate } from './defined-academy-lesson-progress-min-aggregate.output';
import { DefinedAcademyLessonProgressMaxAggregate } from './defined-academy-lesson-progress-max-aggregate.output';

@ObjectType()
export class DefinedAcademyLessonProgressGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    enrollmentId!: number;

    @Field(() => Int, {nullable:false})
    lessonId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => DefinedAcademyLessonProgressStatus, {nullable:false})
    status!: keyof typeof DefinedAcademyLessonProgressStatus;

    @Field(() => Int, {nullable:false})
    progressPercentage!: number;

    @Field(() => Int, {nullable:true})
    lastPositionSeconds?: number;

    @Field(() => Date, {nullable:true})
    startedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    lastAccessedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
