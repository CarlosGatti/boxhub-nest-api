import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class DefinedAcademyLessonProgressEnrollmentIdLessonIdCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    enrollmentId!: number;

    @Field(() => Int, {nullable:false})
    lessonId!: number;
}
