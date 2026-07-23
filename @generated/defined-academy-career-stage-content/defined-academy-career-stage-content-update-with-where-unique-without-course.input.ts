import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerStageContentWhereUniqueInput } from './defined-academy-career-stage-content-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageContentUpdateWithoutCourseInput } from './defined-academy-career-stage-content-update-without-course.input';

@InputType()
export class DefinedAcademyCareerStageContentUpdateWithWhereUniqueWithoutCourseInput {

    @Field(() => DefinedAcademyCareerStageContentWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCareerStageContentWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyCareerStageContentUpdateWithoutCourseInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentUpdateWithoutCourseInput)
    data!: DefinedAcademyCareerStageContentUpdateWithoutCourseInput;
}
