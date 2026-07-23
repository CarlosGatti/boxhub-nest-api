import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentWhereInput } from './defined-academy-career-stage-content-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumDefinedAcademyCareerStageContentTypeFilter } from '../prisma/enum-defined-academy-career-stage-content-type-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedAcademyCareerStageRelationFilter } from '../defined-academy-career-stage/defined-academy-career-stage-relation-filter.input';
import { DefinedAcademyCourseNullableRelationFilter } from '../defined-academy-course/defined-academy-course-nullable-relation-filter.input';
import { DefinedAcademyResourceNullableRelationFilter } from '../defined-academy-resource/defined-academy-resource-nullable-relation-filter.input';

@InputType()
export class DefinedAcademyCareerStageContentWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DefinedAcademyCareerStageContentWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyCareerStageContentWhereInput>;

    @Field(() => [DefinedAcademyCareerStageContentWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyCareerStageContentWhereInput>;

    @Field(() => [DefinedAcademyCareerStageContentWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyCareerStageContentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    stageId?: IntFilter;

    @Field(() => EnumDefinedAcademyCareerStageContentTypeFilter, {nullable:true})
    contentType?: EnumDefinedAcademyCareerStageContentTypeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    courseId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    resourceId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    label?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    sortOrder?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedAcademyCareerStageRelationFilter, {nullable:true})
    stage?: DefinedAcademyCareerStageRelationFilter;

    @Field(() => DefinedAcademyCourseNullableRelationFilter, {nullable:true})
    course?: DefinedAcademyCourseNullableRelationFilter;

    @Field(() => DefinedAcademyResourceNullableRelationFilter, {nullable:true})
    resource?: DefinedAcademyResourceNullableRelationFilter;
}
