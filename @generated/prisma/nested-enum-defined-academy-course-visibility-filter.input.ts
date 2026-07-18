import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseVisibility } from './defined-academy-course-visibility.enum';

@InputType()
export class NestedEnumDefinedAcademyCourseVisibilityFilter {

    @Field(() => DefinedAcademyCourseVisibility, {nullable:true})
    equals?: keyof typeof DefinedAcademyCourseVisibility;

    @Field(() => [DefinedAcademyCourseVisibility], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyCourseVisibility>;

    @Field(() => [DefinedAcademyCourseVisibility], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyCourseVisibility>;

    @Field(() => NestedEnumDefinedAcademyCourseVisibilityFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyCourseVisibilityFilter;
}
