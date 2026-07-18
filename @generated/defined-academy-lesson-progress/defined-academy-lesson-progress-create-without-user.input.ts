import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressStatus } from '../prisma/defined-academy-lesson-progress-status.enum';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentCreateNestedOneWithoutProgressInput } from '../defined-academy-enrollment/defined-academy-enrollment-create-nested-one-without-progress.input';
import { DefinedAcademyLessonCreateNestedOneWithoutProgressInput } from '../defined-academy-lesson/defined-academy-lesson-create-nested-one-without-progress.input';

@InputType()
export class DefinedAcademyLessonProgressCreateWithoutUserInput {

    @Field(() => DefinedAcademyLessonProgressStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyLessonProgressStatus;

    @Field(() => Int, {nullable:true})
    progressPercentage?: number;

    @Field(() => Int, {nullable:true})
    lastPositionSeconds?: number;

    @Field(() => Date, {nullable:true})
    startedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    lastAccessedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyEnrollmentCreateNestedOneWithoutProgressInput, {nullable:false})
    enrollment!: DefinedAcademyEnrollmentCreateNestedOneWithoutProgressInput;

    @Field(() => DefinedAcademyLessonCreateNestedOneWithoutProgressInput, {nullable:false})
    lesson!: DefinedAcademyLessonCreateNestedOneWithoutProgressInput;
}
