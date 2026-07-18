import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseStatus } from './defined-academy-course-status.enum';

@InputType()
export class NestedEnumDefinedAcademyCourseStatusFilter {

    @Field(() => DefinedAcademyCourseStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyCourseStatus;

    @Field(() => [DefinedAcademyCourseStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyCourseStatus>;

    @Field(() => [DefinedAcademyCourseStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyCourseStatus>;

    @Field(() => NestedEnumDefinedAcademyCourseStatusFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyCourseStatusFilter;
}
