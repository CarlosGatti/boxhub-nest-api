import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyLessonType } from '../prisma/defined-academy-lesson-type.enum';
import { DefinedAcademyContentStatus } from '../prisma/defined-academy-content-status.enum';
import { DefinedAcademyCourseVisibility } from '../prisma/defined-academy-course-visibility.enum';
import { DefinedAcademyResourceUncheckedCreateNestedManyWithoutLessonInput } from '../defined-academy-resource/defined-academy-resource-unchecked-create-nested-many-without-lesson.input';
import { DefinedAcademyLessonProgressUncheckedCreateNestedManyWithoutLessonInput } from '../defined-academy-lesson-progress/defined-academy-lesson-progress-unchecked-create-nested-many-without-lesson.input';

@InputType()
export class DefinedAcademyLessonUncheckedCreateWithoutModuleInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => DefinedAcademyResourceUncheckedCreateNestedManyWithoutLessonInput, {nullable:true})
    resources?: DefinedAcademyResourceUncheckedCreateNestedManyWithoutLessonInput;

    @Field(() => DefinedAcademyLessonProgressUncheckedCreateNestedManyWithoutLessonInput, {nullable:true})
    progress?: DefinedAcademyLessonProgressUncheckedCreateNestedManyWithoutLessonInput;
}
