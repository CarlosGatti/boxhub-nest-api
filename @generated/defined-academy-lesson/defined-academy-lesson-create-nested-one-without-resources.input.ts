import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonCreateWithoutResourcesInput } from './defined-academy-lesson-create-without-resources.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonCreateOrConnectWithoutResourcesInput } from './defined-academy-lesson-create-or-connect-without-resources.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonWhereUniqueInput } from './defined-academy-lesson-where-unique.input';

@InputType()
export class DefinedAcademyLessonCreateNestedOneWithoutResourcesInput {

    @Field(() => DefinedAcademyLessonCreateWithoutResourcesInput, {nullable:true})
    @Type(() => DefinedAcademyLessonCreateWithoutResourcesInput)
    create?: DefinedAcademyLessonCreateWithoutResourcesInput;

    @Field(() => DefinedAcademyLessonCreateOrConnectWithoutResourcesInput, {nullable:true})
    @Type(() => DefinedAcademyLessonCreateOrConnectWithoutResourcesInput)
    connectOrCreate?: DefinedAcademyLessonCreateOrConnectWithoutResourcesInput;

    @Field(() => DefinedAcademyLessonWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyLessonWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>;
}
