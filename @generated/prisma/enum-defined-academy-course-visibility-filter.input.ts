import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseVisibility } from './defined-academy-course-visibility.enum';
import { NestedEnumDefinedAcademyCourseVisibilityFilter } from './nested-enum-defined-academy-course-visibility-filter.input';

@InputType()
export class EnumDefinedAcademyCourseVisibilityFilter {

    @Field(() => DefinedAcademyCourseVisibility, {nullable:true})
    equals?: keyof typeof DefinedAcademyCourseVisibility;

    @Field(() => [DefinedAcademyCourseVisibility], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyCourseVisibility>;

    @Field(() => [DefinedAcademyCourseVisibility], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyCourseVisibility>;

    @Field(() => NestedEnumDefinedAcademyCourseVisibilityFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyCourseVisibilityFilter;
}
