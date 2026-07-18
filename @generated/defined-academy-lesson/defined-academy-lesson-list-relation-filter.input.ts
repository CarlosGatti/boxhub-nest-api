import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonWhereInput } from './defined-academy-lesson-where.input';

@InputType()
export class DefinedAcademyLessonListRelationFilter {

    @Field(() => DefinedAcademyLessonWhereInput, {nullable:true})
    every?: DefinedAcademyLessonWhereInput;

    @Field(() => DefinedAcademyLessonWhereInput, {nullable:true})
    some?: DefinedAcademyLessonWhereInput;

    @Field(() => DefinedAcademyLessonWhereInput, {nullable:true})
    none?: DefinedAcademyLessonWhereInput;
}
