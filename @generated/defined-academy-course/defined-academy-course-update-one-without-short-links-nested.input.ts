import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateWithoutShortLinksInput } from './defined-academy-course-create-without-short-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateOrConnectWithoutShortLinksInput } from './defined-academy-course-create-or-connect-without-short-links.input';
import { DefinedAcademyCourseUpsertWithoutShortLinksInput } from './defined-academy-course-upsert-without-short-links.input';
import { DefinedAcademyCourseWhereInput } from './defined-academy-course-where.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { DefinedAcademyCourseUpdateToOneWithWhereWithoutShortLinksInput } from './defined-academy-course-update-to-one-with-where-without-short-links.input';

@InputType()
export class DefinedAcademyCourseUpdateOneWithoutShortLinksNestedInput {

    @Field(() => DefinedAcademyCourseCreateWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateWithoutShortLinksInput)
    create?: DefinedAcademyCourseCreateWithoutShortLinksInput;

    @Field(() => DefinedAcademyCourseCreateOrConnectWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateOrConnectWithoutShortLinksInput)
    connectOrCreate?: DefinedAcademyCourseCreateOrConnectWithoutShortLinksInput;

    @Field(() => DefinedAcademyCourseUpsertWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCourseUpsertWithoutShortLinksInput)
    upsert?: DefinedAcademyCourseUpsertWithoutShortLinksInput;

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    disconnect?: DefinedAcademyCourseWhereInput;

    @Field(() => DefinedAcademyCourseWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereInput)
    delete?: DefinedAcademyCourseWhereInput;

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCourseUpdateToOneWithWhereWithoutShortLinksInput, {nullable:true})
    @Type(() => DefinedAcademyCourseUpdateToOneWithWhereWithoutShortLinksInput)
    update?: DefinedAcademyCourseUpdateToOneWithWhereWithoutShortLinksInput;
}
