import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateWithoutCourseInput } from './defined-academy-short-link-create-without-course.input';
import { Type } from 'class-transformer';
import { DefinedAcademyShortLinkCreateOrConnectWithoutCourseInput } from './defined-academy-short-link-create-or-connect-without-course.input';
import { DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutCourseInput } from './defined-academy-short-link-upsert-with-where-unique-without-course.input';
import { DefinedAcademyShortLinkCreateManyCourseInputEnvelope } from './defined-academy-short-link-create-many-course-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyShortLinkWhereUniqueInput } from './defined-academy-short-link-where-unique.input';
import { DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutCourseInput } from './defined-academy-short-link-update-with-where-unique-without-course.input';
import { DefinedAcademyShortLinkUpdateManyWithWhereWithoutCourseInput } from './defined-academy-short-link-update-many-with-where-without-course.input';
import { DefinedAcademyShortLinkScalarWhereInput } from './defined-academy-short-link-scalar-where.input';

@InputType()
export class DefinedAcademyShortLinkUpdateManyWithoutCourseNestedInput {

    @Field(() => [DefinedAcademyShortLinkCreateWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateWithoutCourseInput)
    create?: Array<DefinedAcademyShortLinkCreateWithoutCourseInput>;

    @Field(() => [DefinedAcademyShortLinkCreateOrConnectWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateOrConnectWithoutCourseInput)
    connectOrCreate?: Array<DefinedAcademyShortLinkCreateOrConnectWithoutCourseInput>;

    @Field(() => [DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutCourseInput)
    upsert?: Array<DefinedAcademyShortLinkUpsertWithWhereUniqueWithoutCourseInput>;

    @Field(() => DefinedAcademyShortLinkCreateManyCourseInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyShortLinkCreateManyCourseInputEnvelope)
    createMany?: DefinedAcademyShortLinkCreateManyCourseInputEnvelope;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [DefinedAcademyShortLinkWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyShortLinkWhereUniqueInput, 'id' | 'code'>>;

    @Field(() => [DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutCourseInput)
    update?: Array<DefinedAcademyShortLinkUpdateWithWhereUniqueWithoutCourseInput>;

    @Field(() => [DefinedAcademyShortLinkUpdateManyWithWhereWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkUpdateManyWithWhereWithoutCourseInput)
    updateMany?: Array<DefinedAcademyShortLinkUpdateManyWithWhereWithoutCourseInput>;

    @Field(() => [DefinedAcademyShortLinkScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyShortLinkScalarWhereInput)
    deleteMany?: Array<DefinedAcademyShortLinkScalarWhereInput>;
}
