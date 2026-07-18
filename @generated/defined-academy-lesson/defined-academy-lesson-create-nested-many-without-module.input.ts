import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonCreateWithoutModuleInput } from './defined-academy-lesson-create-without-module.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonCreateOrConnectWithoutModuleInput } from './defined-academy-lesson-create-or-connect-without-module.input';
import { DefinedAcademyLessonCreateManyModuleInputEnvelope } from './defined-academy-lesson-create-many-module-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonWhereUniqueInput } from './defined-academy-lesson-where-unique.input';

@InputType()
export class DefinedAcademyLessonCreateNestedManyWithoutModuleInput {

    @Field(() => [DefinedAcademyLessonCreateWithoutModuleInput], {nullable:true})
    @Type(() => DefinedAcademyLessonCreateWithoutModuleInput)
    create?: Array<DefinedAcademyLessonCreateWithoutModuleInput>;

    @Field(() => [DefinedAcademyLessonCreateOrConnectWithoutModuleInput], {nullable:true})
    @Type(() => DefinedAcademyLessonCreateOrConnectWithoutModuleInput)
    connectOrCreate?: Array<DefinedAcademyLessonCreateOrConnectWithoutModuleInput>;

    @Field(() => DefinedAcademyLessonCreateManyModuleInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyLessonCreateManyModuleInputEnvelope)
    createMany?: DefinedAcademyLessonCreateManyModuleInputEnvelope;

    @Field(() => [DefinedAcademyLessonWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyLessonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>>;
}
