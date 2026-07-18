import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonCreateWithoutModuleInput } from './defined-academy-lesson-create-without-module.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonCreateOrConnectWithoutModuleInput } from './defined-academy-lesson-create-or-connect-without-module.input';
import { DefinedAcademyLessonUpsertWithWhereUniqueWithoutModuleInput } from './defined-academy-lesson-upsert-with-where-unique-without-module.input';
import { DefinedAcademyLessonCreateManyModuleInputEnvelope } from './defined-academy-lesson-create-many-module-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonWhereUniqueInput } from './defined-academy-lesson-where-unique.input';
import { DefinedAcademyLessonUpdateWithWhereUniqueWithoutModuleInput } from './defined-academy-lesson-update-with-where-unique-without-module.input';
import { DefinedAcademyLessonUpdateManyWithWhereWithoutModuleInput } from './defined-academy-lesson-update-many-with-where-without-module.input';
import { DefinedAcademyLessonScalarWhereInput } from './defined-academy-lesson-scalar-where.input';

@InputType()
export class DefinedAcademyLessonUncheckedUpdateManyWithoutModuleNestedInput {

    @Field(() => [DefinedAcademyLessonCreateWithoutModuleInput], {nullable:true})
    @Type(() => DefinedAcademyLessonCreateWithoutModuleInput)
    create?: Array<DefinedAcademyLessonCreateWithoutModuleInput>;

    @Field(() => [DefinedAcademyLessonCreateOrConnectWithoutModuleInput], {nullable:true})
    @Type(() => DefinedAcademyLessonCreateOrConnectWithoutModuleInput)
    connectOrCreate?: Array<DefinedAcademyLessonCreateOrConnectWithoutModuleInput>;

    @Field(() => [DefinedAcademyLessonUpsertWithWhereUniqueWithoutModuleInput], {nullable:true})
    @Type(() => DefinedAcademyLessonUpsertWithWhereUniqueWithoutModuleInput)
    upsert?: Array<DefinedAcademyLessonUpsertWithWhereUniqueWithoutModuleInput>;

    @Field(() => DefinedAcademyLessonCreateManyModuleInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyLessonCreateManyModuleInputEnvelope)
    createMany?: DefinedAcademyLessonCreateManyModuleInputEnvelope;

    @Field(() => [DefinedAcademyLessonWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyLessonWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>>;

    @Field(() => [DefinedAcademyLessonWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyLessonWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>>;

    @Field(() => [DefinedAcademyLessonWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyLessonWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>>;

    @Field(() => [DefinedAcademyLessonWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyLessonWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>>;

    @Field(() => [DefinedAcademyLessonUpdateWithWhereUniqueWithoutModuleInput], {nullable:true})
    @Type(() => DefinedAcademyLessonUpdateWithWhereUniqueWithoutModuleInput)
    update?: Array<DefinedAcademyLessonUpdateWithWhereUniqueWithoutModuleInput>;

    @Field(() => [DefinedAcademyLessonUpdateManyWithWhereWithoutModuleInput], {nullable:true})
    @Type(() => DefinedAcademyLessonUpdateManyWithWhereWithoutModuleInput)
    updateMany?: Array<DefinedAcademyLessonUpdateManyWithWhereWithoutModuleInput>;

    @Field(() => [DefinedAcademyLessonScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyLessonScalarWhereInput)
    deleteMany?: Array<DefinedAcademyLessonScalarWhereInput>;
}
