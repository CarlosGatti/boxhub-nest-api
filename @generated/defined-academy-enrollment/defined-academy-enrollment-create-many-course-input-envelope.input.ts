import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentCreateManyCourseInput } from './defined-academy-enrollment-create-many-course.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyEnrollmentCreateManyCourseInputEnvelope {

    @Field(() => [DefinedAcademyEnrollmentCreateManyCourseInput], {nullable:false})
    @Type(() => DefinedAcademyEnrollmentCreateManyCourseInput)
    data!: Array<DefinedAcademyEnrollmentCreateManyCourseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
