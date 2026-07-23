import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseUpdateWithoutCareerStageLinksInput } from './defined-academy-course-update-without-career-stage-links.input';

@InputType()
export class DefinedAcademyCourseUpdateToOneWithWhereWithoutCareerStageLinksInput {

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    where?: DefinedAcademyCourseWhereInput;

    @Field(() => DefinedAcademyCourseUpdateWithoutCareerStageLinksInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateWithoutCareerStageLinksInput)
    data!: DefinedAcademyCourseUpdateWithoutCareerStageLinksInput;
}
