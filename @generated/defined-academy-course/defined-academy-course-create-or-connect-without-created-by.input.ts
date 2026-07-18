import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateWithoutCreatedByInput } from './defined-academy-course-create-without-created-by.input';

@InputType()
export class DefinedAcademyCourseCreateOrConnectWithoutCreatedByInput {

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCourseCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => DefinedAcademyCourseCreateWithoutCreatedByInput)
    create!: DefinedAcademyCourseCreateWithoutCreatedByInput;
}
