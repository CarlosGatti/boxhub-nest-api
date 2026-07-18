import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseUpdateWithoutModulesInput } from './defined-academy-course-update-without-modules.input';

@InputType()
export class DefinedAcademyCourseUpdateToOneWithWhereWithoutModulesInput {

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    where?: DefinedAcademyCourseWhereInput;

    @Field(() => DefinedAcademyCourseUpdateWithoutModulesInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateWithoutModulesInput)
    data!: DefinedAcademyCourseUpdateWithoutModulesInput;
}
