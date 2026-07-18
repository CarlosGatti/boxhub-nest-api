import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressStatus } from './defined-academy-lesson-progress-status.enum';
import { NestedEnumDefinedAcademyLessonProgressStatusFilter } from './nested-enum-defined-academy-lesson-progress-status-filter.input';

@InputType()
export class EnumDefinedAcademyLessonProgressStatusFilter {

    @Field(() => DefinedAcademyLessonProgressStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyLessonProgressStatus;

    @Field(() => [DefinedAcademyLessonProgressStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyLessonProgressStatus>;

    @Field(() => [DefinedAcademyLessonProgressStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyLessonProgressStatus>;

    @Field(() => NestedEnumDefinedAcademyLessonProgressStatusFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyLessonProgressStatusFilter;
}
