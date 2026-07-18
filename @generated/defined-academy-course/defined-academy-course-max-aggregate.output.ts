import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCourseStatus } from '../prisma/defined-academy-course-status.enum';
import { DefinedAcademyCourseVisibility } from '../prisma/defined-academy-course-visibility.enum';

@ObjectType()
export class DefinedAcademyCourseMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    academyId?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    summary?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    coverImageUrl?: string;

    @Field(() => DefinedAcademyCourseStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyCourseStatus;

    @Field(() => DefinedAcademyCourseVisibility, {nullable:true})
    visibility?: keyof typeof DefinedAcademyCourseVisibility;

    @Field(() => String, {nullable:true})
    level?: string;

    @Field(() => Int, {nullable:true})
    estimatedDurationMinutes?: number;

    @Field(() => Int, {nullable:true})
    sortOrder?: number;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    createdById?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
