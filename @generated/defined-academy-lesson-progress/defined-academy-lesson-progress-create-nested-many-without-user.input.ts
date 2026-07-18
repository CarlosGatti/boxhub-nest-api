import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressCreateWithoutUserInput } from './defined-academy-lesson-progress-create-without-user.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressCreateOrConnectWithoutUserInput } from './defined-academy-lesson-progress-create-or-connect-without-user.input';
import { DefinedAcademyLessonProgressCreateManyUserInputEnvelope } from './defined-academy-lesson-progress-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonProgressWhereUniqueInput } from './defined-academy-lesson-progress-where-unique.input';

@InputType()
export class DefinedAcademyLessonProgressCreateNestedManyWithoutUserInput {

    @Field(() => [DefinedAcademyLessonProgressCreateWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateWithoutUserInput)
    create?: Array<DefinedAcademyLessonProgressCreateWithoutUserInput>;

    @Field(() => [DefinedAcademyLessonProgressCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<DefinedAcademyLessonProgressCreateOrConnectWithoutUserInput>;

    @Field(() => DefinedAcademyLessonProgressCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateManyUserInputEnvelope)
    createMany?: DefinedAcademyLessonProgressCreateManyUserInputEnvelope;

    @Field(() => [DefinedAcademyLessonProgressWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyLessonProgressWhereUniqueInput, 'id' | 'enrollmentId_lessonId'>>;
}
