import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonCreateWithoutProgressInput } from './defined-academy-lesson-create-without-progress.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonCreateOrConnectWithoutProgressInput } from './defined-academy-lesson-create-or-connect-without-progress.input';
import { DefinedAcademyLessonUpsertWithoutProgressInput } from './defined-academy-lesson-upsert-without-progress.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonWhereUniqueInput } from './defined-academy-lesson-where-unique.input';
import { DefinedAcademyLessonUpdateToOneWithWhereWithoutProgressInput } from './defined-academy-lesson-update-to-one-with-where-without-progress.input';

@InputType()
export class DefinedAcademyLessonUpdateOneRequiredWithoutProgressNestedInput {

    @Field(() => DefinedAcademyLessonCreateWithoutProgressInput, {nullable:true})
    @Type(() => DefinedAcademyLessonCreateWithoutProgressInput)
    create?: DefinedAcademyLessonCreateWithoutProgressInput;

    @Field(() => DefinedAcademyLessonCreateOrConnectWithoutProgressInput, {nullable:true})
    @Type(() => DefinedAcademyLessonCreateOrConnectWithoutProgressInput)
    connectOrCreate?: DefinedAcademyLessonCreateOrConnectWithoutProgressInput;

    @Field(() => DefinedAcademyLessonUpsertWithoutProgressInput, {nullable:true})
    @Type(() => DefinedAcademyLessonUpsertWithoutProgressInput)
    upsert?: DefinedAcademyLessonUpsertWithoutProgressInput;

    @Field(() => DefinedAcademyLessonWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyLessonWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>;

    @Field(() => DefinedAcademyLessonUpdateToOneWithWhereWithoutProgressInput, {nullable:true})
    @Type(() => DefinedAcademyLessonUpdateToOneWithWhereWithoutProgressInput)
    update?: DefinedAcademyLessonUpdateToOneWithWhereWithoutProgressInput;
}
