import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateWithoutCreatedByInput } from './defined-academy-course-create-without-created-by.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateOrConnectWithoutCreatedByInput } from './defined-academy-course-create-or-connect-without-created-by.input';
import { DefinedAcademyCourseUpsertWithWhereUniqueWithoutCreatedByInput } from './defined-academy-course-upsert-with-where-unique-without-created-by.input';
import { DefinedAcademyCourseCreateManyCreatedByInputEnvelope } from './defined-academy-course-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { DefinedAcademyCourseUpdateWithWhereUniqueWithoutCreatedByInput } from './defined-academy-course-update-with-where-unique-without-created-by.input';
import { DefinedAcademyCourseUpdateManyWithWhereWithoutCreatedByInput } from './defined-academy-course-update-many-with-where-without-created-by.input';
import { DefinedAcademyCourseScalarWhereInput } from './defined-academy-course-scalar-where.input';

@InputType()
export class DefinedAcademyCourseUncheckedUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [DefinedAcademyCourseCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyCourseCreateWithoutCreatedByInput)
    create?: Array<DefinedAcademyCourseCreateWithoutCreatedByInput>;

    @Field(() => [DefinedAcademyCourseCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyCourseCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<DefinedAcademyCourseCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [DefinedAcademyCourseUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyCourseUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<DefinedAcademyCourseUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => DefinedAcademyCourseCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateManyCreatedByInputEnvelope)
    createMany?: DefinedAcademyCourseCreateManyCreatedByInputEnvelope;

    @Field(() => [DefinedAcademyCourseWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyCourseWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyCourseWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyCourseWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyCourseUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyCourseUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<DefinedAcademyCourseUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [DefinedAcademyCourseUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyCourseUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<DefinedAcademyCourseUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [DefinedAcademyCourseScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyCourseScalarWhereInput)
    deleteMany?: Array<DefinedAcademyCourseScalarWhereInput>;
}
