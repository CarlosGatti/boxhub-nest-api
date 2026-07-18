import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressWhereInput } from './defined-academy-lesson-progress-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedAcademyLessonProgressArgs {

    @Field(() => DefinedAcademyLessonProgressWhereInput, {nullable:true})
    @Type(() => DefinedAcademyLessonProgressWhereInput)
    where?: DefinedAcademyLessonProgressWhereInput;
}
