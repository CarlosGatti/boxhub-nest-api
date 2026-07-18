import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyContentStatus } from '../prisma/defined-academy-content-status.enum';
import { DefinedAcademyLessonCreateNestedManyWithoutModuleInput } from '../defined-academy-lesson/defined-academy-lesson-create-nested-many-without-module.input';

@InputType()
export class DefinedAcademyModuleCreateWithoutCourseInput {

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

    @Field(() => DefinedAcademyLessonCreateNestedManyWithoutModuleInput, {nullable:true})
    lessons?: DefinedAcademyLessonCreateNestedManyWithoutModuleInput;
}
