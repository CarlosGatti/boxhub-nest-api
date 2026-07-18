import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressStatus } from './defined-academy-lesson-progress-status.enum';

@InputType()
export class NestedEnumDefinedAcademyLessonProgressStatusFilter {

    @Field(() => DefinedAcademyLessonProgressStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyLessonProgressStatus;

    @Field(() => [DefinedAcademyLessonProgressStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyLessonProgressStatus>;

    @Field(() => [DefinedAcademyLessonProgressStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyLessonProgressStatus>;

    @Field(() => NestedEnumDefinedAcademyLessonProgressStatusFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyLessonProgressStatusFilter;
}
