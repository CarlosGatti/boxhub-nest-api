import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonType } from './defined-academy-lesson-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyLessonTypeFilter } from './nested-enum-defined-academy-lesson-type-filter.input';

@InputType()
export class NestedEnumDefinedAcademyLessonTypeWithAggregatesFilter {

    @Field(() => DefinedAcademyLessonType, {nullable:true})
    equals?: keyof typeof DefinedAcademyLessonType;

    @Field(() => [DefinedAcademyLessonType], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyLessonType>;

    @Field(() => [DefinedAcademyLessonType], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyLessonType>;

    @Field(() => NestedEnumDefinedAcademyLessonTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyLessonTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyLessonTypeFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyLessonTypeFilter;

    @Field(() => NestedEnumDefinedAcademyLessonTypeFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyLessonTypeFilter;
}
