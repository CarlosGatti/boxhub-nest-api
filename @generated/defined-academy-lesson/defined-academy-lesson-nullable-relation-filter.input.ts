import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonWhereInput } from './defined-academy-lesson-where.input';

@InputType()
export class DefinedAcademyLessonNullableRelationFilter {

    @Field(() => DefinedAcademyLessonWhereInput, {nullable:true})
    is?: DefinedAcademyLessonWhereInput;

    @Field(() => DefinedAcademyLessonWhereInput, {nullable:true})
    isNot?: DefinedAcademyLessonWhereInput;
}
