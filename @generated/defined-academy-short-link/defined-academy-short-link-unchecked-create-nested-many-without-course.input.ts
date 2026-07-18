import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateWithoutCourseInput } from './defined-academy-short-link-create-without-course.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateOrConnectWithoutCourseInput } from './defined-academy-short-link-create-or-connect-without-course.input';
import { DefinedAcademyShortLinkCreateManyCourseInputEnvelope } from './defined-academy-short-link-create-many-course-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';

@InputType()
export class DefinedAcademyShortLinkUncheckedCreateNestedManyWithoutCourseInput {

    @Field(() => [DefinedAcademyShortLinkCreateWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateWithoutCourseInput)
    create?: Array<DefinedAcademyShortLinkCreateWithoutCourseInput>;

    @Field(() => [DefinedAcademyShortLinkCreateOrConnectWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateOrConnectWithoutCourseInput)
    connectOrCreate?: Array<DefinedAcademyShortLinkCreateOrConnectWithoutCourseInput>;

    @Field(() => DefinedAcademyShortLinkCreateManyCourseInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateManyCourseInputEnvelope)
    createMany?: DefinedAcademyShortLinkCreateManyCourseInputEnvelope;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;
}
