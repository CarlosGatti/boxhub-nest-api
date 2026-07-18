import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyLessonType } from '../prisma/defined-academy-lesson-type.enum';
import { DefinedAcademyContentStatus } from '../prisma/defined-academy-content-status.enum';
import { DefinedAcademyCourseVisibility } from '../prisma/defined-academy-course-visibility.enum';
import { DefinedAcademyModule } from '../defined-academy-module/defined-academy-module.model';
import { DefinedAcademyResource } from '../defined-academy-resource/defined-academy-resource.model';
import { DefinedAcademyLessonProgress } from '../defined-academy-lesson-progress/defined-academy-lesson-progress.model';
import { DefinedAcademyLessonCount } from './defined-academy-lesson-count.output';

@ObjectType()
export class DefinedAcademyLesson {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    moduleId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    summary!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => DefinedAcademyLessonType, {nullable:false,defaultValue:'VIDEO'})
    lessonType!: keyof typeof DefinedAcademyLessonType;

    @Field(() => String, {nullable:true})
    videoUrl!: string | null;

    @Field(() => String, {nullable:true})
    videoProvider!: string | null;

    @Field(() => Int, {nullable:true})
    videoDurationSeconds!: number | null;

    @Field(() => String, {nullable:true})
    bodyContent!: string | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    sortOrder!: number;

    @Field(() => DefinedAcademyContentStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof DefinedAcademyContentStatus;

    @Field(() => DefinedAcademyCourseVisibility, {nullable:false,defaultValue:'PUBLIC'})
    visibility!: keyof typeof DefinedAcademyCourseVisibility;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isPreview!: boolean;

    @Field(() => Date, {nullable:true})
    publishedAt!: Date | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedAcademyModule, {nullable:false})
    module?: DefinedAcademyModule;

    @Field(() => [DefinedAcademyResource], {nullable:true})
    resources?: Array<DefinedAcademyResource>;

    @Field(() => [DefinedAcademyLessonProgress], {nullable:true})
    progress?: Array<DefinedAcademyLessonProgress>;

    @Field(() => DefinedAcademyLessonCount, {nullable:false})
    _count?: DefinedAcademyLessonCount;
}
