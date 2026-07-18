import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressCreateWithoutUserInput } from './defined-academy-lesson-progress-create-without-user.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressCreateOrConnectWithoutUserInput } from './defined-academy-lesson-progress-create-or-connect-without-user.input';
import { DefinedAcademyLessonProgressUpsertWithWhereUniqueWithoutUserInput } from './defined-academy-lesson-progress-upsert-with-where-unique-without-user.input';
import { DefinedAcademyLessonProgressCreateManyUserInputEnvelope } from './defined-academy-lesson-progress-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonProgressWhereUniqueInput } from './defined-academy-lesson-progress-where-unique.input';
import { DefinedAcademyLessonProgressUpdateWithWhereUniqueWithoutUserInput } from './defined-academy-lesson-progress-update-with-where-unique-without-user.input';
import { DefinedAcademyLessonProgressUpdateManyWithWhereWithoutUserInput } from './defined-academy-lesson-progress-update-many-with-where-without-user.input';
import { DefinedAcademyLessonProgressScalarWhereInput } from './defined-academy-lesson-progress-scalar-where.input';

@InputType()
export class DefinedAcademyLessonProgressUpdateManyWithoutUserNestedInput {

    @Field(() => [DefinedAcademyLessonProgressCreateWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateWithoutUserInput)
    create?: Array<DefinedAcademyLessonProgressCreateWithoutUserInput>;

    @Field(() => [DefinedAcademyLessonProgressCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<DefinedAcademyLessonProgressCreateOrConnectWithoutUserInput>;

    @Field(() => [DefinedAcademyLessonProgressUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<DefinedAcademyLessonProgressUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => DefinedAcademyLessonProgressCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyLessonProgressCreateManyUserInputEnvelope)
    createMany?: DefinedAcademyLessonProgressCreateManyUserInputEnvelope;

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

    @Field(() => [DefinedAcademyLessonProgressUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<DefinedAcademyLessonProgressUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [DefinedAcademyLessonProgressUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<DefinedAcademyLessonProgressUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [DefinedAcademyLessonProgressScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyLessonProgressScalarWhereInput)
    deleteMany?: Array<DefinedAcademyLessonProgressScalarWhereInput>;
}
