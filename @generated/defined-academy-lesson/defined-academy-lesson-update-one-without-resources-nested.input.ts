import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonCreateWithoutResourcesInput } from './defined-academy-lesson-create-without-resources.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonCreateOrConnectWithoutResourcesInput } from './defined-academy-lesson-create-or-connect-without-resources.input';
import { DefinedAcademyLessonUpsertWithoutResourcesInput } from './defined-academy-lesson-upsert-without-resources.input';
import { DefinedAcademyLessonWhereInput } from './defined-academy-lesson-where.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonWhereUniqueInput } from './defined-academy-lesson-where-unique.input';
import { DefinedAcademyLessonUpdateToOneWithWhereWithoutResourcesInput } from './defined-academy-lesson-update-to-one-with-where-without-resources.input';

@InputType()
export class DefinedAcademyLessonUpdateOneWithoutResourcesNestedInput {

    @Field(() => DefinedAcademyLessonCreateWithoutResourcesInput, {nullable:true})
    @Type(() => DefinedAcademyLessonCreateWithoutResourcesInput)
    create?: DefinedAcademyLessonCreateWithoutResourcesInput;

    @Field(() => DefinedAcademyLessonCreateOrConnectWithoutResourcesInput, {nullable:true})
    @Type(() => DefinedAcademyLessonCreateOrConnectWithoutResourcesInput)
    connectOrCreate?: DefinedAcademyLessonCreateOrConnectWithoutResourcesInput;

    @Field(() => DefinedAcademyLessonUpsertWithoutResourcesInput, {nullable:true})
    @Type(() => DefinedAcademyLessonUpsertWithoutResourcesInput)
    upsert?: DefinedAcademyLessonUpsertWithoutResourcesInput;

    @Field(() => DefinedAcademyLessonWhereInput, {nullable:true})
    @Type(() => DefinedAcademyLessonWhereInput)
    disconnect?: DefinedAcademyLessonWhereInput;

    @Field(() => DefinedAcademyLessonWhereInput, {nullable:true})
    @Type(() => DefinedAcademyLessonWhereInput)
    delete?: DefinedAcademyLessonWhereInput;

    @Field(() => DefinedAcademyLessonWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyLessonWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>;

    @Field(() => DefinedAcademyLessonUpdateToOneWithWhereWithoutResourcesInput, {nullable:true})
    @Type(() => DefinedAcademyLessonUpdateToOneWithWhereWithoutResourcesInput)
    update?: DefinedAcademyLessonUpdateToOneWithWhereWithoutResourcesInput;
}
