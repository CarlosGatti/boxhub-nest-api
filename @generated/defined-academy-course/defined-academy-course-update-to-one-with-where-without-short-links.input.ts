import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseUpdateWithoutShortLinksInput } from './defined-academy-course-update-without-short-links.input';

@InputType()
export class DefinedAcademyCourseUpdateToOneWithWhereWithoutShortLinksInput {

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    where?: DefinedAcademyCourseWhereInput;

    @Field(() => DefinedAcademyCourseUpdateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateWithoutShortLinksInput)
    data!: DefinedAcademyCourseUpdateWithoutShortLinksInput;
}
