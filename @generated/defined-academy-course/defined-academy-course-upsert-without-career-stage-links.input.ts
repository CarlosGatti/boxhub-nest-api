import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseUpdateWithoutCareerStageLinksInput } from './defined-academy-course-update-without-career-stage-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateWithoutCareerStageLinksInput } from './defined-academy-course-create-without-career-stage-links.input';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';

@InputType()
export class DefinedAcademyCourseUpsertWithoutCareerStageLinksInput {

    @Field(() => DefinedAcademyCourseUpdateWithoutCareerStageLinksInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateWithoutCareerStageLinksInput)
    update!: DefinedAcademyCourseUpdateWithoutCareerStageLinksInput;

    @Field(() => DefinedAcademyCourseCreateWithoutCareerStageLinksInput, {nullable:false})
    @Type(() => DefinedAcademyCourseCreateWithoutCareerStageLinksInput)
    create!: DefinedAcademyCourseCreateWithoutCareerStageLinksInput;

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    where?: DefinedAcademyCourseWhereInput;
}
