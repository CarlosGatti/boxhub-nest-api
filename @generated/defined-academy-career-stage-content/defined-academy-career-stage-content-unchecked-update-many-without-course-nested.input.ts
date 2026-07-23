import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentCreateWithoutCourseInput } from './defined-academy-career-stage-content-create-without-course.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageContentCreateOrConnectWithoutCourseInput } from './defined-academy-career-stage-content-create-or-connect-without-course.input';
import { DefinedAcademyCareerStageContentUpsertWithWhereUniqueWithoutCourseInput } from './defined-academy-career-stage-content-upsert-with-where-unique-without-course.input';
import { DefinedAcademyCareerStageContentCreateManyCourseInputEnvelope } from './defined-academy-career-stage-content-create-many-course-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageContentWhereUniqueInput } from './defined-academy-career-stage-content-where-unique.input';
import { DefinedAcademyCareerStageContentUpdateWithWhereUniqueWithoutCourseInput } from './defined-academy-career-stage-content-update-with-where-unique-without-course.input';
import { DefinedAcademyCareerStageContentUpdateManyWithWhereWithoutCourseInput } from './defined-academy-career-stage-content-update-many-with-where-without-course.input';
import { DefinedAcademyCareerStageContentScalarWhereInput } from './defined-academy-career-stage-content-scalar-where.input';

@InputType()
export class DefinedAcademyCareerStageContentUncheckedUpdateManyWithoutCourseNestedInput {

    @Field(() => [DefinedAcademyCareerStageContentCreateWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateWithoutCourseInput)
    create?: Array<DefinedAcademyCareerStageContentCreateWithoutCourseInput>;

    @Field(() => [DefinedAcademyCareerStageContentCreateOrConnectWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateOrConnectWithoutCourseInput)
    connectOrCreate?: Array<DefinedAcademyCareerStageContentCreateOrConnectWithoutCourseInput>;

    @Field(() => [DefinedAcademyCareerStageContentUpsertWithWhereUniqueWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentUpsertWithWhereUniqueWithoutCourseInput)
    upsert?: Array<DefinedAcademyCareerStageContentUpsertWithWhereUniqueWithoutCourseInput>;

    @Field(() => DefinedAcademyCareerStageContentCreateManyCourseInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateManyCourseInputEnvelope)
    createMany?: DefinedAcademyCareerStageContentCreateManyCourseInputEnvelope;

    @Field(() => [DefinedAcademyCareerStageContentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyCareerStageContentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyCareerStageContentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyCareerStageContentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyCareerStageContentUpdateWithWhereUniqueWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentUpdateWithWhereUniqueWithoutCourseInput)
    update?: Array<DefinedAcademyCareerStageContentUpdateWithWhereUniqueWithoutCourseInput>;

    @Field(() => [DefinedAcademyCareerStageContentUpdateManyWithWhereWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentUpdateManyWithWhereWithoutCourseInput)
    updateMany?: Array<DefinedAcademyCareerStageContentUpdateManyWithWhereWithoutCourseInput>;

    @Field(() => [DefinedAcademyCareerStageContentScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentScalarWhereInput)
    deleteMany?: Array<DefinedAcademyCareerStageContentScalarWhereInput>;
}
