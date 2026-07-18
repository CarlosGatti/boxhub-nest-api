import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressCreateManyLessonInput } from './defined-academy-lesson-progress-create-many-lesson.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyLessonProgressCreateManyLessonInputEnvelope {

    @Field(() => [DefinedAcademyLessonProgressCreateManyLessonInput], {nullable:false})
    @Type(() => DefinedAcademyLessonProgressCreateManyLessonInput)
    data!: Array<DefinedAcademyLessonProgressCreateManyLessonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
