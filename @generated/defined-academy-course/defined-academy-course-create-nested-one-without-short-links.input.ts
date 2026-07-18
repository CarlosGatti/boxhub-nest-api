import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateWithoutShortLinksInput } from './defined-academy-course-create-without-short-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateOrConnectWithoutShortLinksInput } from './defined-academy-course-create-or-connect-without-short-links.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';

@InputType()
export class DefinedAcademyCourseCreateNestedOneWithoutShortLinksInput {

    @Field(() => DefinedAcademyCourseCreateWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateWithoutShortLinksInput)
    create?: DefinedAcademyCourseCreateWithoutShortLinksInput;

    @Field(() => DefinedAcademyCourseCreateOrConnectWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateOrConnectWithoutShortLinksInput)
    connectOrCreate?: DefinedAcademyCourseCreateOrConnectWithoutShortLinksInput;

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;
}
