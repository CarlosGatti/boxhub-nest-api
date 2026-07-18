import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentStatus } from '../prisma/defined-academy-enrollment-status.enum';
import { DefinedAcademyCourseCreateNestedOneWithoutEnrollmentsInput } from '../defined-academy-course/defined-academy-course-create-nested-one-without-enrollments.input';
import { UserCreateNestedOneWithoutDefinedAcademyEnrollmentsInput } from '../user/user-create-nested-one-without-defined-academy-enrollments.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyEnrollmentCreateWithoutProgressInput {

    @Field(() => DefinedAcademyEnrollmentStatus, {nullable:true})
    status?: keyof typeof DefinedAcademyEnrollmentStatus;

    @Field(() => Date, {nullable:true})
    enrolledAt?: Date | string;

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

    @Field(() => DefinedAcademyCourseCreateNestedOneWithoutEnrollmentsInput, {nullable:false})
    course!: DefinedAcademyCourseCreateNestedOneWithoutEnrollmentsInput;

    @Field(() => UserCreateNestedOneWithoutDefinedAcademyEnrollmentsInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutDefinedAcademyEnrollmentsInput)
    user!: UserCreateNestedOneWithoutDefinedAcademyEnrollmentsInput;
}
