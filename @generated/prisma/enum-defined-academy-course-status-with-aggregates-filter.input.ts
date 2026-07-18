import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseStatus } from './defined-academy-course-status.enum';
import { NestedEnumDefinedAcademyCourseStatusWithAggregatesFilter } from './nested-enum-defined-academy-course-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyCourseStatusFilter } from './nested-enum-defined-academy-course-status-filter.input';

@InputType()
export class EnumDefinedAcademyCourseStatusWithAggregatesFilter {

    @Field(() => DefinedAcademyCourseStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyCourseStatus;

    @Field(() => [DefinedAcademyCourseStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyCourseStatus>;

    @Field(() => [DefinedAcademyCourseStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyCourseStatus>;

    @Field(() => NestedEnumDefinedAcademyCourseStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyCourseStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyCourseStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyCourseStatusFilter;

    @Field(() => NestedEnumDefinedAcademyCourseStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyCourseStatusFilter;
}
