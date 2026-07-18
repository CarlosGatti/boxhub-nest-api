import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyContentStatus } from '../prisma/defined-academy-content-status.enum';
import { DefinedAcademyCourseCreateNestedOneWithoutModulesInput } from '../defined-academy-course/defined-academy-course-create-nested-one-without-modules.input';

@InputType()
export class DefinedAcademyModuleCreateWithoutLessonsInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    sortOrder?: number;

    @Field(() => DefinedAcademyContentStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyContentStatus;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyCourseCreateNestedOneWithoutModulesInput, {nullable:false})
    course!: DefinedAcademyCourseCreateNestedOneWithoutModulesInput;
}
