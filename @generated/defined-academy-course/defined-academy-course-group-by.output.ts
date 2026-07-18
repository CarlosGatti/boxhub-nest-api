import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCourseStatus } from '../prisma/defined-academy-course-status.enum';
import { DefinedAcademyCourseVisibility } from '../prisma/defined-academy-course-visibility.enum';
import { DefinedAcademyCourseCountAggregate } from './defined-academy-course-count-aggregate.output';
import { DefinedAcademyCourseAvgAggregate } from './defined-academy-course-avg-aggregate.output';
import { DefinedAcademyCourseSumAggregate } from './defined-academy-course-sum-aggregate.output';
import { DefinedAcademyCourseMinAggregate } from './defined-academy-course-min-aggregate.output';
import { DefinedAcademyCourseMaxAggregate } from './defined-academy-course-max-aggregate.output';

@ObjectType()
export class DefinedAcademyCourseGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    academyId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    summary?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    coverImageUrl?: string;

    @Field(() => DefinedAcademyCourseStatus, {nullable:false})
    status!: keyof typeof DefinedAcademyCourseStatus;

    @Field(() => DefinedAcademyCourseVisibility, {nullable:false})
    visibility!: keyof typeof DefinedAcademyCourseVisibility;

    @Field(() => String, {nullable:true})
    level?: string;

    @Field(() => Int, {nullable:true})
    estimatedDurationMinutes?: number;

    @Field(() => Int, {nullable:false})
    sortOrder!: number;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    createdById?: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => DefinedAcademyCourseCountAggregate, {nullable:true})
    _count?: DefinedAcademyCourseCountAggregate;

    @Field(() => DefinedAcademyCourseAvgAggregate, {nullable:true})
    _avg?: DefinedAcademyCourseAvgAggregate;

    @Field(() => DefinedAcademyCourseSumAggregate, {nullable:true})
    _sum?: DefinedAcademyCourseSumAggregate;

    @Field(() => DefinedAcademyCourseMinAggregate, {nullable:true})
    _min?: DefinedAcademyCourseMinAggregate;

    @Field(() => DefinedAcademyCourseMaxAggregate, {nullable:true})
    _max?: DefinedAcademyCourseMaxAggregate;
}
