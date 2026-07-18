import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyModuleWhereUniqueInput } from './defined-academy-module-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleCreateWithoutCourseInput } from './defined-academy-module-create-without-course.input';

@InputType()
export class DefinedAcademyModuleCreateOrConnectWithoutCourseInput {

    @Field(() => DefinedAcademyModuleWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyModuleWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyModuleWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyModuleCreateWithoutCourseInput, {nullable:false})
    @Type(() => DefinedAcademyModuleCreateWithoutCourseInput)
    create!: DefinedAcademyModuleCreateWithoutCourseInput;
}
