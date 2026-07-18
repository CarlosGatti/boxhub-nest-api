import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressCreateWithoutLessonInput } from './defined-academy-lesson-progress-create-without-lesson.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressCreateOrConnectWithoutLessonInput } from './defined-academy-lesson-progress-create-or-connect-without-lesson.input';
import { DefinedAcademyLessonProgressUpsertWithWhereUniqueWithoutLessonInput } from './defined-academy-lesson-progress-upsert-with-where-unique-without-lesson.input';
import { DefinedAcademyLessonProgressCreateManyLessonInputEnvelope } from './defined-academy-lesson-progress-create-many-lesson-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonProgressWhereUniqueInput } from './defined-academy-lesson-progress-where-unique.input';
import { DefinedAcademyLessonProgressUpdateWithWhereUniqueWithoutLessonInput } from './defined-academy-lesson-progress-update-with-where-unique-without-lesson.input';
import { DefinedAcademyLessonProgressUpdateManyWithWhereWithoutLessonInput } from './defined-academy-lesson-progress-update-many-with-where-without-lesson.input';
import { DefinedAcademyLessonProgressScalarWhereInput } from './defined-academy-lesson-progress-scalar-where.input';

@InputType()
export class DefinedAcademyLessonProgressUpdateManyWithoutLessonNestedInput {

    @Field(() => [DefinedAcademyLessonProgressCreateWithoutLessonInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateWithoutLessonInput)
    create?: Array<DefinedAcademyLessonProgressCreateWithoutLessonInput>;

    @Field(() => [DefinedAcademyLessonProgressCreateOrConnectWithoutLessonInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateOrConnectWithoutLessonInput)
    connectOrCreate?: Array<DefinedAcademyLessonProgressCreateOrConnectWithoutLessonInput>;

    @Field(() => [DefinedAcademyLessonProgressUpsertWithWhereUniqueWithoutLessonInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressUpsertWithWhereUniqueWithoutLessonInput)
    upsert?: Array<DefinedAcademyLessonProgressUpsertWithWhereUniqueWithoutLessonInput>;

    @Field(() => DefinedAcademyLessonProgressCreateManyLessonInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateManyLessonInputEnvelope)
    createMany?: DefinedAcademyLessonProgressCreateManyLessonInputEnvelope;

    @Field(() => [DefinedAcademyLessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyLessonProgressWhereUniqueInput, 'id' | 'enrollmentId_lessonId'>>;

    @Field(() => [DefinedAcademyLessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyLessonProgressWhereUniqueInput, 'id' | 'enrollmentId_lessonId'>>;

    @Field(() => [DefinedAcademyLessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyLessonProgressWhereUniqueInput, 'id' | 'enrollmentId_lessonId'>>;

    @Field(() => [DefinedAcademyLessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyLessonProgressWhereUniqueInput, 'id' | 'enrollmentId_lessonId'>>;

    @Field(() => [DefinedAcademyLessonProgressUpdateWithWhereUniqueWithoutLessonInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressUpdateWithWhereUniqueWithoutLessonInput)
    update?: Array<DefinedAcademyLessonProgressUpdateWithWhereUniqueWithoutLessonInput>;

    @Field(() => [DefinedAcademyLessonProgressUpdateManyWithWhereWithoutLessonInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressUpdateManyWithWhereWithoutLessonInput)
    updateMany?: Array<DefinedAcademyLessonProgressUpdateManyWithWhereWithoutLessonInput>;

    @Field(() => [DefinedAcademyLessonProgressScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressScalarWhereInput)
    deleteMany?: Array<DefinedAcademyLessonProgressScalarWhereInput>;
}
