import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateWithoutCourseInput } from './defined-academy-short-link-create-without-course.input';

@InputType()
export class DefinedAcademyShortLinkCreateOrConnectWithoutCourseInput {

    @Field(() => DefinedAcademyShortLinkWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>;

    @Field(() => DefinedAcademyShortLinkCreateWithoutCourseInput, {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateWithoutCourseInput)
    create!: DefinedAcademyShortLinkCreateWithoutCourseInput;
}
