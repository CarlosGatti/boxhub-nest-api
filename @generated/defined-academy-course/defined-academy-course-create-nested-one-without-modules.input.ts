import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateWithoutModulesInput } from './defined-academy-course-create-without-modules.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateOrConnectWithoutModulesInput } from './defined-academy-course-create-or-connect-without-modules.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';

@InputType()
export class DefinedAcademyCourseCreateNestedOneWithoutModulesInput {

    @Field(() => DefinedAcademyCourseCreateWithoutModulesInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateWithoutModulesInput)
    create?: DefinedAcademyCourseCreateWithoutModulesInput;

    @Field(() => DefinedAcademyCourseCreateOrConnectWithoutModulesInput, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateOrConnectWithoutModulesInput)
    connectOrCreate?: DefinedAcademyCourseCreateOrConnectWithoutModulesInput;

    @Field(() => DefinedAcademyCourseWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>;
}
