import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateWithoutCareerStageLinksInput } from './defined-academy-course-create-without-career-stage-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateOrConnectWithoutCareerStageLinksInput } from './defined-academy-course-create-or-connect-without-career-stage-links.input';
import { DefinedAcademyCourseUpsertWithoutCareerStageLinksInput } from './defined-academy-course-upsert-without-career-stage-links.input';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { DefinedAcademyCourseUpdateToOneWithWhereWithoutCareerStageLinksInput } from './defined-academy-course-update-to-one-with-where-without-career-stage-links.input';

@InputType()
export class DefinedAcademyCourseUpdateOneWithoutCareerStageLinksNestedInput {

    @Field(() => DefinedAcademyCourseCreateWithoutCareerStageLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateWithoutCareerStageLinksInput)
    create?: DefinedAcademyCourseCreateWithoutCareerStageLinksInput;

    @Field(() => DefinedAcademyCourseCreateOrConnectWithoutCareerStageLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateOrConnectWithoutCareerStageLinksInput)
    connectOrCreate?: DefinedAcademyCourseCreateOrConnectWithoutCareerStageLinksInput;

    @Field(() => DefinedAcademyCourseUpsertWithoutCareerStageLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCourseUpsertWithoutCareerStageLinksInput)
    upsert?: DefinedAcademyCourseUpsertWithoutCareerStageLinksInput;

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    disconnect?: DefinedAcademyCourseWhereInput;

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    delete?: DefinedAcademyCourseWhereInput;

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCourseUpdateToOneWithWhereWithoutCareerStageLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCourseUpdateToOneWithWhereWithoutCareerStageLinksInput)
    update?: DefinedAcademyCourseUpdateToOneWithWhereWithoutCareerStageLinksInput;
}
