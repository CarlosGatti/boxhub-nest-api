import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyModuleCreateWithoutLessonsInput } from './defined-academy-module-create-without-lessons.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleCreateOrConnectWithoutLessonsInput } from './defined-academy-module-create-or-connect-without-lessons.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyModuleWhereUniqueInput } from './defined-academy-module-where-unique.input';

@InputType()
export class DefinedAcademyModuleCreateNestedOneWithoutLessonsInput {

    @Field(() => DefinedAcademyModuleCreateWithoutLessonsInput, {nullable:true})
    @Type(() => DefinedAcademyModuleCreateWithoutLessonsInput)
    create?: DefinedAcademyModuleCreateWithoutLessonsInput;

    @Field(() => DefinedAcademyModuleCreateOrConnectWithoutLessonsInput, {nullable:true})
    @Type(() => DefinedAcademyModuleCreateOrConnectWithoutLessonsInput)
    connectOrCreate?: DefinedAcademyModuleCreateOrConnectWithoutLessonsInput;

    @Field(() => DefinedAcademyModuleWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyModuleWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyModuleWhereUniqueInput, 'id'>;
}
