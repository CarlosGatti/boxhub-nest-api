import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseUpdateWithoutShortLinksInput } from './defined-academy-course-update-without-short-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateWithoutShortLinksInput } from './defined-academy-course-create-without-short-links.input';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';

@InputType()
export class DefinedAcademyCourseUpsertWithoutShortLinksInput {

    @Field(() => DefinedAcademyCourseUpdateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyCourseUpdateWithoutShortLinksInput)
    update!: DefinedAcademyCourseUpdateWithoutShortLinksInput;

    @Field(() => DefinedAcademyCourseCreateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyCourseCreateWithoutShortLinksInput)
    create!: DefinedAcademyCourseCreateWithoutShortLinksInput;

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    where?: DefinedAcademyCourseWhereInput;
}
