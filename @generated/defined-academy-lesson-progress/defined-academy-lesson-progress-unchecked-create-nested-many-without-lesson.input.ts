import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressCreateWithoutLessonInput } from './defined-academy-lesson-progress-create-without-lesson.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressCreateOrConnectWithoutLessonInput } from './defined-academy-lesson-progress-create-or-connect-without-lesson.input';
import { DefinedAcademyLessonProgressCreateManyLessonInputEnvelope } from './defined-academy-lesson-progress-create-many-lesson-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonProgressWhereUniqueInput } from './defined-academy-lesson-progress-where-unique.input';

@InputType()
export class DefinedAcademyLessonProgressUncheckedCreateNestedManyWithoutLessonInput {

    @Field(() => [DefinedAcademyLessonProgressCreateWithoutLessonInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateWithoutLessonInput)
    create?: Array<DefinedAcademyLessonProgressCreateWithoutLessonInput>;

    @Field(() => [DefinedAcademyLessonProgressCreateOrConnectWithoutLessonInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateOrConnectWithoutLessonInput)
    connectOrCreate?: Array<DefinedAcademyLessonProgressCreateOrConnectWithoutLessonInput>;

    @Field(() => DefinedAcademyLessonProgressCreateManyLessonInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateManyLessonInputEnvelope)
    createMany?: DefinedAcademyLessonProgressCreateManyLessonInputEnvelope;

    @Field(() => [DefinedAcademyLessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyLessonProgressWhereUniqueInput, 'id' | 'enrollmentId_lessonId'>>;
}
