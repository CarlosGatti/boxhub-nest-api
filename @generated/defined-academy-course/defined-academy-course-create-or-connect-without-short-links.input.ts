import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateWithoutShortLinksInput } from './defined-academy-course-create-without-short-links.input';

@InputType()
export class DefinedAcademyCourseCreateOrConnectWithoutShortLinksInput {

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCourseCreateWithoutShortLinksInput, {nullable:false})
    @Type(() => DefinedAcademyCourseCreateWithoutShortLinksInput)
    create!: DefinedAcademyCourseCreateWithoutShortLinksInput;
}
