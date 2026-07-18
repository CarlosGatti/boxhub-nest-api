import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyLessonType } from '../prisma/defined-academy-lesson-type.enum';
import { DefinedAcademyContentStatus } from '../prisma/defined-academy-content-status.enum';
import { DefinedAcademyCourseVisibility } from '../prisma/defined-academy-course-visibility.enum';

@InputType()
export class DefinedAcademyLessonCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => DefinedAcademyLessonType, {nullable:true})
    lessonType?: keyof typeof DefinedAcademyLessonType;

    @Field(() => String, {nullable:true})
    videoUrl?: string;

    @Field(() => String, {nullable:true})
    videoProvider?: string;

    @Field(() => Int, {nullable:true})
    videoDurationSeconds?: number;

    @Field(() => String, {nullable:true})
    bodyContent?: string;

    @Field(() => Int, {nullable:true})
    sortOrder?: number;

    @Field(() => DefinedAcademyContentStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyContentStatus;

    @Field(() => DefinedAcademyCourseVisibility, {nullable:true})
    visibility?: keyof typeof DefinedAcademyCourseVisibility;

    @Field(() => Boolean, {nullable:true})
    isPreview?: boolean;

    @Field(() => Date, {nullable:true})
    publishedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
