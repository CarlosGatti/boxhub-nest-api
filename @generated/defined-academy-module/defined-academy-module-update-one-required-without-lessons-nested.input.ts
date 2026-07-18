import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyModuleCreateWithoutLessonsInput } from './defined-academy-module-create-without-lessons.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleCreateOrConnectWithoutLessonsInput } from './defined-academy-module-create-or-connect-without-lessons.input';
import { DefinedAcademyModuleUpsertWithoutLessonsInput } from './defined-academy-module-upsert-without-lessons.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyModuleWhereUniqueInput } from './defined-academy-module-where-unique.input';
import { DefinedAcademyModuleUpdateToOneWithWhereWithoutLessonsInput } from './defined-academy-module-update-to-one-with-where-without-lessons.input';

@InputType()
export class DefinedAcademyModuleUpdateOneRequiredWithoutLessonsNestedInput {

    @Field(() => DefinedAcademyModuleCreateWithoutLessonsInput, {nullable:true})
    @Type(() => DefinedAcademyModuleCreateWithoutLessonsInput)
    create?: DefinedAcademyModuleCreateWithoutLessonsInput;

    @Field(() => DefinedAcademyModuleCreateOrConnectWithoutLessonsInput, {nullable:true})
    @Type(() => DefinedAcademyModuleCreateOrConnectWithoutLessonsInput)
    connectOrCreate?: DefinedAcademyModuleCreateOrConnectWithoutLessonsInput;

    @Field(() => DefinedAcademyModuleUpsertWithoutLessonsInput, {nullable:true})
    @Type(() => DefinedAcademyModuleUpsertWithoutLessonsInput)
    upsert?: DefinedAcademyModuleUpsertWithoutLessonsInput;

    @Field(() => DefinedAcademyModuleWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyModuleWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyModuleWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyModuleUpdateToOneWithWhereWithoutLessonsInput, {nullable:true})
    @Type(() => DefinedAcademyModuleUpdateToOneWithWhereWithoutLessonsInput)
    update?: DefinedAcademyModuleUpdateToOneWithWhereWithoutLessonsInput;
}
