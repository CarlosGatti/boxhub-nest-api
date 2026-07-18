import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyLessonType } from '../prisma/defined-academy-lesson-type.enum';
import { DefinedAcademyContentStatus } from '../prisma/defined-academy-content-status.enum';
import { DefinedAcademyCourseVisibility } from '../prisma/defined-academy-course-visibility.enum';
import { DefinedAcademyLessonCountAggregate } from './defined-academy-lesson-count-aggregate.output';
import { DefinedAcademyLessonAvgAggregate } from './defined-academy-lesson-avg-aggregate.output';
import { DefinedAcademyLessonSumAggregate } from './defined-academy-lesson-sum-aggregate.output';
import { DefinedAcademyLessonMinAggregate } from './defined-academy-lesson-min-aggregate.output';
import { DefinedAcademyLessonMaxAggregate } from './defined-academy-lesson-max-aggregate.output';

@ObjectType()
export class DefinedAcademyLessonGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    moduleId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    summary?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => DefinedAcademyLessonType, {nullable:false})
    lessonType!: keyof typeof DefinedAcademyLessonType;

    @Field(() => String, {nullable:true})
    videoUrl?: string;

    @Field(() => String, {nullable:true})
    videoProvider?: string;

    @Field(() => Int, {nullable:true})
    videoDurationSeconds?: number;

    @Field(() => String, {nullable:true})
    bodyContent?: string;

    @Field(() => Int, {nullable:false})
    sortOrder!: number;

    @Field(() => DefinedAcademyContentStatus, {nullable:false})
    status!: keyof typeof DefinedAcademyContentStatus;

    @Field(() => DefinedAcademyCourseVisibility, {nullable:false})
    visibility!: keyof typeof DefinedAcademyCourseVisibility;

    @Field(() => Boolean, {nullable:false})
    isPreview!: boolean;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
