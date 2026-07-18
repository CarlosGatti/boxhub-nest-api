import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateWithoutAcademyInput } from './defined-academy-course-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateOrConnectWithoutAcademyInput } from './defined-academy-course-create-or-connect-without-academy.input';
import { DefinedAcademyCourseUpsertWithWhereUniqueWithoutAcademyInput } from './defined-academy-course-upsert-with-where-unique-without-academy.input';
import { DefinedAcademyCourseCreateManyAcademyInputEnvelope } from './defined-academy-course-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { DefinedAcademyCourseUpdateWithWhereUniqueWithoutAcademyInput } from './defined-academy-course-update-with-where-unique-without-academy.input';
import { DefinedAcademyCourseUpdateManyWithWhereWithoutAcademyInput } from './defined-academy-course-update-many-with-where-without-academy.input';
import { DefinedAcademyCourseScalarWhereInput } from './defined-academy-course-scalar-where.input';

@InputType()
export class DefinedAcademyCourseUncheckedUpdateManyWithoutAcademyNestedInput {

    @Field(() => [DefinedAcademyCourseCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyCourseCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyCourseCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyCourseCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyCourseCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyCourseCreateOrConnectWithoutAcademyInput>;

    @Field(() => [DefinedAcademyCourseUpsertWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyCourseUpsertWithWhereUniqueWithoutAcademyInput)
    upsert?: Array<DefinedAcademyCourseUpsertWithWhereUniqueWithoutAcademyInput>;

    @Field(() => DefinedAcademyCourseCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyCourseCreateManyAcademyInputEnvelope;

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

    @Field(() => [DefinedAcademyCourseUpdateWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyCourseUpdateWithWhereUniqueWithoutAcademyInput)
    update?: Array<DefinedAcademyCourseUpdateWithWhereUniqueWithoutAcademyInput>;

    @Field(() => [DefinedAcademyCourseUpdateManyWithWhereWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyCourseUpdateManyWithWhereWithoutAcademyInput)
    updateMany?: Array<DefinedAcademyCourseUpdateManyWithWhereWithoutAcademyInput>;

    @Field(() => [DefinedAcademyCourseScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyCourseScalarWhereInput)
    deleteMany?: Array<DefinedAcademyCourseScalarWhereInput>;
}
