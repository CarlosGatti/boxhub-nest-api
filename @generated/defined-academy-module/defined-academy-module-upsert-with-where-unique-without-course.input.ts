import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyModuleWhereUniqueInput } from './defined-academy-module-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleUpdateWithoutCourseInput } from './defined-academy-module-update-without-course.input';
import { DefinedAcademyModuleCreateWithoutCourseInput } from './defined-academy-module-create-without-course.input';

@InputType()
export class DefinedAcademyModuleUpsertWithWhereUniqueWithoutCourseInput {

    @Field(() => DefinedAcademyModuleWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyModuleWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyModuleWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyModuleUpdateWithoutCourseInput, {nullable:false})
    @Type(() => DefinedAcademyModuleUpdateWithoutCourseInput)
    update!: DefinedAcademyModuleUpdateWithoutCourseInput;

    @Field(() => DefinedAcademyModuleCreateWithoutCourseInput, {nullable:false})
    @Type(() => DefinedAcademyModuleCreateWithoutCourseInput)
    create!: DefinedAcademyModuleCreateWithoutCourseInput;
}
