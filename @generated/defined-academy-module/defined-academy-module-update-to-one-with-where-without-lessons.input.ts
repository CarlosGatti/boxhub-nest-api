import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyModuleWhereInput } from './defined-academy-module-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleUpdateWithoutLessonsInput } from './defined-academy-module-update-without-lessons.input';

@InputType()
export class DefinedAcademyModuleUpdateToOneWithWhereWithoutLessonsInput {

    @Field(() => DefinedAcademyModuleWhereInput, {nullable:true})
    @Type(() => DefinedAcademyModuleWhereInput)
    where?: DefinedAcademyModuleWhereInput;

    @Field(() => DefinedAcademyModuleUpdateWithoutLessonsInput, {nullable:false})
    @Type(() => DefinedAcademyModuleUpdateWithoutLessonsInput)
    data!: DefinedAcademyModuleUpdateWithoutLessonsInput;
}
