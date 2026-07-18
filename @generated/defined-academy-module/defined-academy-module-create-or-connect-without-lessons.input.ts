import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyModuleWhereUniqueInput } from './defined-academy-module-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleCreateWithoutLessonsInput } from './defined-academy-module-create-without-lessons.input';

@InputType()
export class DefinedAcademyModuleCreateOrConnectWithoutLessonsInput {

    @Field(() => DefinedAcademyModuleWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyModuleWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyModuleWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyModuleCreateWithoutLessonsInput, {nullable:false})
    @Type(() => DefinedAcademyModuleCreateWithoutLessonsInput)
    create!: DefinedAcademyModuleCreateWithoutLessonsInput;
}
