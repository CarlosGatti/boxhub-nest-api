import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateWithoutCareerStageLinksInput } from './defined-academy-course-create-without-career-stage-links.input';

@InputType()
export class DefinedAcademyCourseCreateOrConnectWithoutCareerStageLinksInput {

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCourseCreateWithoutCareerStageLinksInput, {nullable:false})
    @Type(() => DefinedAcademyCourseCreateWithoutCareerStageLinksInput)
    create!: DefinedAcademyCourseCreateWithoutCareerStageLinksInput;
}
