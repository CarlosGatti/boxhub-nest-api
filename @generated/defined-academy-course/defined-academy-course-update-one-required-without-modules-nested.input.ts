import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateWithoutModulesInput } from './defined-academy-course-create-without-modules.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateOrConnectWithoutModulesInput } from './defined-academy-course-create-or-connect-without-modules.input';
import { DefinedAcademyCourseUpsertWithoutModulesInput } from './defined-academy-course-upsert-without-modules.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';
import { DefinedAcademyCourseUpdateToOneWithWhereWithoutModulesInput } from './defined-academy-course-update-to-one-with-where-without-modules.input';

@InputType()
export class DefinedAcademyCourseUpdateOneRequiredWithoutModulesNestedInput {

    @Field(() => DefinedAcademyCourseCreateWithoutModulesInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateWithoutModulesInput)
    create?: DefinedAcademyCourseCreateWithoutModulesInput;

    @Field(() => DefinedAcademyCourseCreateOrConnectWithoutModulesInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateOrConnectWithoutModulesInput)
    connectOrCreate?: DefinedAcademyCourseCreateOrConnectWithoutModulesInput;

    @Field(() => DefinedAcademyCourseUpsertWithoutModulesInput, {nullable:true})
    @Type(() => DefinedAcademyCourseUpsertWithoutModulesInput)
    upsert?: DefinedAcademyCourseUpsertWithoutModulesInput;

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCourseUpdateToOneWithWhereWithoutModulesInput, {nullable:true})
    @Type(() => DefinedAcademyCourseUpdateToOneWithWhereWithoutModulesInput)
    update?: DefinedAcademyCourseUpdateToOneWithWhereWithoutModulesInput;
}
