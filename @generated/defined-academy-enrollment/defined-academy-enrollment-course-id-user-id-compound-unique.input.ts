import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DefinedAcademyEnrollmentCourseIdUserIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    courseId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;
}
