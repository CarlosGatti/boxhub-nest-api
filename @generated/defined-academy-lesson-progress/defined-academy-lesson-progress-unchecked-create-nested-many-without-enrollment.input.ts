import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressCreateWithoutEnrollmentInput } from './defined-academy-lesson-progress-create-without-enrollment.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressCreateOrConnectWithoutEnrollmentInput } from './defined-academy-lesson-progress-create-or-connect-without-enrollment.input';
import { DefinedAcademyLessonProgressCreateManyEnrollmentInputEnvelope } from './defined-academy-lesson-progress-create-many-enrollment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonProgressWhereUniqueInput } from './defined-academy-lesson-progress-where-unique.input';

@InputType()
export class DefinedAcademyLessonProgressUncheckedCreateNestedManyWithoutEnrollmentInput {

    @Field(() => [DefinedAcademyLessonProgressCreateWithoutEnrollmentInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateWithoutEnrollmentInput)
    create?: Array<DefinedAcademyLessonProgressCreateWithoutEnrollmentInput>;

    @Field(() => [DefinedAcademyLessonProgressCreateOrConnectWithoutEnrollmentInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateOrConnectWithoutEnrollmentInput)
    connectOrCreate?: Array<DefinedAcademyLessonProgressCreateOrConnectWithoutEnrollmentInput>;

    @Field(() => DefinedAcademyLessonProgressCreateManyEnrollmentInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateManyEnrollmentInputEnvelope)
    createMany?: DefinedAcademyLessonProgressCreateManyEnrollmentInputEnvelope;

    @Field(() => [DefinedAcademyLessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyLessonProgressWhereUniqueInput, 'id' | 'enrollmentId_lessonId'>>;
}
