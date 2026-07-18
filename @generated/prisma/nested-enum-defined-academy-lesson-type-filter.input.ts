import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonType } from './defined-academy-lesson-type.enum';

@InputType()
export class NestedEnumDefinedAcademyLessonTypeFilter {

    @Field(() => DefinedAcademyLessonType, {nullable:true})
    equals?: keyof typeof DefinedAcademyLessonType;

    @Field(() => [DefinedAcademyLessonType], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyLessonType>;

    @Field(() => [DefinedAcademyLessonType], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyLessonType>;

    @Field(() => NestedEnumDefinedAcademyLessonTypeFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyLessonTypeFilter;
}
