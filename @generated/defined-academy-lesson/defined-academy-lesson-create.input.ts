import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonType } from '../prisma/defined-academy-lesson-type.enum';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyContentStatus } from '../prisma/defined-academy-content-status.enum';
import { DefinedAcademyCourseVisibility } from '../prisma/defined-academy-course-visibility.enum';
import { DefinedAcademyModuleCreateNestedOneWithoutLessonsInput } from '../defined-academy-module/defined-academy-module-create-nested-one-without-lessons.input';
import { DefinedAcademyResourceCreateNestedManyWithoutLessonInput } from '../defined-academy-resource/defined-academy-resource-create-nested-many-without-lesson.input';
import { DefinedAcademyLessonProgressCreateNestedManyWithoutLessonInput } from '../defined-academy-lesson-progress/defined-academy-lesson-progress-create-nested-many-without-lesson.input';

@InputType()
export class DefinedAcademyLessonCreateInput {

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

    @Field(() => DefinedAcademyModuleCreateNestedOneWithoutLessonsInput, {nullable:false})
    module!: DefinedAcademyModuleCreateNestedOneWithoutLessonsInput;

    @Field(() => DefinedAcademyResourceCreateNestedManyWithoutLessonInput, {nullable:true})
    resources?: DefinedAcademyResourceCreateNestedManyWithoutLessonInput;

    @Field(() => DefinedAcademyLessonProgressCreateNestedManyWithoutLessonInput, {nullable:true})
    progress?: DefinedAcademyLessonProgressCreateNestedManyWithoutLessonInput;
}
