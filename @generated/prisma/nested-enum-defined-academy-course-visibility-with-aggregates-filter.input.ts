import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseVisibility } from './defined-academy-course-visibility.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyCourseVisibilityFilter } from './nested-enum-defined-academy-course-visibility-filter.input';

@InputType()
export class NestedEnumDefinedAcademyCourseVisibilityWithAggregatesFilter {

    @Field(() => DefinedAcademyCourseVisibility, {nullable:true})
    equals?: keyof typeof DefinedAcademyCourseVisibility;

    @Field(() => [DefinedAcademyCourseVisibility], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyCourseVisibility>;

    @Field(() => [DefinedAcademyCourseVisibility], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyCourseVisibility>;

    @Field(() => NestedEnumDefinedAcademyCourseVisibilityWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyCourseVisibilityWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyCourseVisibilityFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyCourseVisibilityFilter;

    @Field(() => NestedEnumDefinedAcademyCourseVisibilityFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyCourseVisibilityFilter;
}
