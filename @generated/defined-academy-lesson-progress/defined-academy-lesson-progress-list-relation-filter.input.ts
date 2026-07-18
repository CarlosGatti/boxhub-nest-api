import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressWhereInput } from './defined-academy-lesson-progress-where.input';

@InputType()
export class DefinedAcademyLessonProgressListRelationFilter {

    @Field(() => DefinedAcademyLessonProgressWhereInput, {nullable:true})
    every?: DefinedAcademyLessonProgressWhereInput;

    @Field(() => DefinedAcademyLessonProgressWhereInput, {nullable:true})
    some?: DefinedAcademyLessonProgressWhereInput;

    @Field(() => DefinedAcademyLessonProgressWhereInput, {nullable:true})
    none?: DefinedAcademyLessonProgressWhereInput;
}
