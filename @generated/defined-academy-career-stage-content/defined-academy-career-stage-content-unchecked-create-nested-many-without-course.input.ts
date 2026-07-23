import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentCreateWithoutCourseInput } from './defined-academy-career-stage-content-create-without-course.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageContentCreateOrConnectWithoutCourseInput } from './defined-academy-career-stage-content-create-or-connect-without-course.input';
import { DefinedAcademyCareerStageContentCreateManyCourseInputEnvelope } from './defined-academy-career-stage-content-create-many-course-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageContentWhereUniqueInput } from './defined-academy-career-stage-content-where-unique.input';

@InputType()
export class DefinedAcademyCareerStageContentUncheckedCreateNestedManyWithoutCourseInput {

    @Field(() => [DefinedAcademyCareerStageContentCreateWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateWithoutCourseInput)
    create?: Array<DefinedAcademyCareerStageContentCreateWithoutCourseInput>;

    @Field(() => [DefinedAcademyCareerStageContentCreateOrConnectWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateOrConnectWithoutCourseInput)
    connectOrCreate?: Array<DefinedAcademyCareerStageContentCreateOrConnectWithoutCourseInput>;

    @Field(() => DefinedAcademyCareerStageContentCreateManyCourseInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentCreateManyCourseInputEnvelope)
    createMany?: DefinedAcademyCareerStageContentCreateManyCourseInputEnvelope;

    @Field(() => [DefinedAcademyCareerStageContentWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>>;
}
