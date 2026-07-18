import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentStatus } from '../prisma/defined-academy-enrollment-status.enum';

@InputType()
export class DefinedAcademyEnrollmentCreateManyUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    courseId!: number;

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
}
