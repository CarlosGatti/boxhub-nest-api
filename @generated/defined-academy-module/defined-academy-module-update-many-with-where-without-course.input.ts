import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyModuleScalarWhereInput } from './defined-academy-module-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleUpdateManyMutationInput } from './defined-academy-module-update-many-mutation.input';

@InputType()
export class DefinedAcademyModuleUpdateManyWithWhereWithoutCourseInput {

    @Field(() => DefinedAcademyModuleScalarWhereInput, {nullable:false})
    @Type(() => DefinedAcademyModuleScalarWhereInput)
    where!: DefinedAcademyModuleScalarWhereInput;

    @Field(() => DefinedAcademyModuleUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedAcademyModuleUpdateManyMutationInput)
    data!: DefinedAcademyModuleUpdateManyMutationInput;
}
