import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressCreateManyUserInput } from './defined-academy-lesson-progress-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyLessonProgressCreateManyUserInputEnvelope {

    @Field(() => [DefinedAcademyLessonProgressCreateManyUserInput], {nullable:false})
    @Type(() => DefinedAcademyLessonProgressCreateManyUserInput)
    data!: Array<DefinedAcademyLessonProgressCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
