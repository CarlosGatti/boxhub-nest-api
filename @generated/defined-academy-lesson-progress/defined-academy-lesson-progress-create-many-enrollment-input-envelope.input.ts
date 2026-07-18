import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressCreateManyEnrollmentInput } from './defined-academy-lesson-progress-create-many-enrollment.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyLessonProgressCreateManyEnrollmentInputEnvelope {

    @Field(() => [DefinedAcademyLessonProgressCreateManyEnrollmentInput], {nullable:false})
    @Type(() => DefinedAcademyLessonProgressCreateManyEnrollmentInput)
    data!: Array<DefinedAcademyLessonProgressCreateManyEnrollmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
