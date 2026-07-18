import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseUpdateWithoutModulesInput } from './defined-academy-course-update-without-modules.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateWithoutModulesInput } from './defined-academy-course-create-without-modules.input';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';

@InputType()
export class DefinedAcademyCourseUpsertWithoutModulesInput {

    @Field(() => DefinedAcademyCourseUpdateWithoutModulesInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateWithoutModulesInput)
    update!: DefinedAcademyCourseUpdateWithoutModulesInput;

    @Field(() => DefinedAcademyCourseCreateWithoutModulesInput, {nullable:false})
    @Type(() => DefinedAcademyCourseCreateWithoutModulesInput)
    create!: DefinedAcademyCourseCreateWithoutModulesInput;

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    where?: DefinedAcademyCourseWhereInput;
}
