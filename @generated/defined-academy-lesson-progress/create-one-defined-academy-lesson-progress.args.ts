import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressCreateInput } from './defined-academy-lesson-progress-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedAcademyLessonProgressArgs {

    @Field(() => DefinedAcademyLessonProgressCreateInput, {nullable:false})
    @Type(() => DefinedAcademyLessonProgressCreateInput)
    data!: DefinedAcademyLessonProgressCreateInput;
}
