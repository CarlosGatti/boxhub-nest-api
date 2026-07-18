import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyModuleUpdateWithoutLessonsInput } from './defined-academy-module-update-without-lessons.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleCreateWithoutLessonsInput } from './defined-academy-module-create-without-lessons.input';
import { DefinedAcademyModuleWhereInput } from './defined-academy-module-where.input';

@InputType()
export class DefinedAcademyModuleUpsertWithoutLessonsInput {

    @Field(() => DefinedAcademyModuleUpdateWithoutLessonsInput, {nullable:false})
    @Type(() => DefinedAcademyModuleUpdateWithoutLessonsInput)
    update!: DefinedAcademyModuleUpdateWithoutLessonsInput;

    @Field(() => DefinedAcademyModuleCreateWithoutLessonsInput, {nullable:false})
    @Type(() => DefinedAcademyModuleCreateWithoutLessonsInput)
    create!: DefinedAcademyModuleCreateWithoutLessonsInput;

    @Field(() => DefinedAcademyModuleWhereInput, {nullable:true})
    @Type(() => DefinedAcademyModuleWhereInput)
    where?: DefinedAcademyModuleWhereInput;
}
