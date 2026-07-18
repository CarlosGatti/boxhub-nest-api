import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressStatus } from '../prisma/defined-academy-lesson-progress-status.enum';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentCreateNestedOneWithoutProgressInput } from '../defined-academy-enrollment/defined-academy-enrollment-create-nested-one-without-progress.input';
import { UserCreateNestedOneWithoutDefinedAcademyLessonProgressInput } from '../user/user-create-nested-one-without-defined-academy-lesson-progress.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyLessonProgressCreateWithoutLessonInput {

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

    @Field(() => UserCreateNestedOneWithoutDefinedAcademyLessonProgressInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutDefinedAcademyLessonProgressInput)
    user!: UserCreateNestedOneWithoutDefinedAcademyLessonProgressInput;
}
