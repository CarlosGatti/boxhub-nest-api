import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressCreateWithoutEnrollmentInput } from './defined-academy-lesson-progress-create-without-enrollment.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressCreateOrConnectWithoutEnrollmentInput } from './defined-academy-lesson-progress-create-or-connect-without-enrollment.input';
import { DefinedAcademyLessonProgressUpsertWithWhereUniqueWithoutEnrollmentInput } from './defined-academy-lesson-progress-upsert-with-where-unique-without-enrollment.input';
import { DefinedAcademyLessonProgressCreateManyEnrollmentInputEnvelope } from './defined-academy-lesson-progress-create-many-enrollment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonProgressWhereUniqueInput } from './defined-academy-lesson-progress-where-unique.input';
import { DefinedAcademyLessonProgressUpdateWithWhereUniqueWithoutEnrollmentInput } from './defined-academy-lesson-progress-update-with-where-unique-without-enrollment.input';
import { DefinedAcademyLessonProgressUpdateManyWithWhereWithoutEnrollmentInput } from './defined-academy-lesson-progress-update-many-with-where-without-enrollment.input';
import { DefinedAcademyLessonProgressScalarWhereInput } from './defined-academy-lesson-progress-scalar-where.input';

@InputType()
export class DefinedAcademyLessonProgressUpdateManyWithoutEnrollmentNestedInput {

    @Field(() => [DefinedAcademyLessonProgressCreateWithoutEnrollmentInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateWithoutEnrollmentInput)
    create?: Array<DefinedAcademyLessonProgressCreateWithoutEnrollmentInput>;

    @Field(() => [DefinedAcademyLessonProgressCreateOrConnectWithoutEnrollmentInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateOrConnectWithoutEnrollmentInput)
    connectOrCreate?: Array<DefinedAcademyLessonProgressCreateOrConnectWithoutEnrollmentInput>;

    @Field(() => [DefinedAcademyLessonProgressUpsertWithWhereUniqueWithoutEnrollmentInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressUpsertWithWhereUniqueWithoutEnrollmentInput)
    upsert?: Array<DefinedAcademyLessonProgressUpsertWithWhereUniqueWithoutEnrollmentInput>;

    @Field(() => DefinedAcademyLessonProgressCreateManyEnrollmentInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateManyEnrollmentInputEnvelope)
    createMany?: DefinedAcademyLessonProgressCreateManyEnrollmentInputEnvelope;

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

    @Field(() => [DefinedAcademyLessonProgressUpdateWithWhereUniqueWithoutEnrollmentInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressUpdateWithWhereUniqueWithoutEnrollmentInput)
    update?: Array<DefinedAcademyLessonProgressUpdateWithWhereUniqueWithoutEnrollmentInput>;

    @Field(() => [DefinedAcademyLessonProgressUpdateManyWithWhereWithoutEnrollmentInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressUpdateManyWithWhereWithoutEnrollmentInput)
    updateMany?: Array<DefinedAcademyLessonProgressUpdateManyWithWhereWithoutEnrollmentInput>;

    @Field(() => [DefinedAcademyLessonProgressScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressScalarWhereInput)
    deleteMany?: Array<DefinedAcademyLessonProgressScalarWhereInput>;
}
