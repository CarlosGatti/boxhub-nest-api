import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressStatus } from './defined-academy-lesson-progress-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyLessonProgressStatusFilter } from './nested-enum-defined-academy-lesson-progress-status-filter.input';

@InputType()
export class NestedEnumDefinedAcademyLessonProgressStatusWithAggregatesFilter {

    @Field(() => DefinedAcademyLessonProgressStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyLessonProgressStatus;

    @Field(() => [DefinedAcademyLessonProgressStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyLessonProgressStatus>;

    @Field(() => [DefinedAcademyLessonProgressStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyLessonProgressStatus>;

    @Field(() => NestedEnumDefinedAcademyLessonProgressStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyLessonProgressStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyLessonProgressStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyLessonProgressStatusFilter;

    @Field(() => NestedEnumDefinedAcademyLessonProgressStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyLessonProgressStatusFilter;
}
