import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateWithoutCareerStageLinksInput } from './defined-academy-course-create-without-career-stage-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateOrConnectWithoutCareerStageLinksInput } from './defined-academy-course-create-or-connect-without-career-stage-links.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';

@InputType()
export class DefinedAcademyCourseCreateNestedOneWithoutCareerStageLinksInput {

    @Field(() => DefinedAcademyCourseCreateWithoutCareerStageLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateWithoutCareerStageLinksInput)
    create?: DefinedAcademyCourseCreateWithoutCareerStageLinksInput;

    @Field(() => DefinedAcademyCourseCreateOrConnectWithoutCareerStageLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateOrConnectWithoutCareerStageLinksInput)
    connectOrCreate?: DefinedAcademyCourseCreateOrConnectWithoutCareerStageLinksInput;

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;
}
