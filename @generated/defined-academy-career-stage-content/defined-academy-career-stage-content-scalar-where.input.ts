import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumDefinedAcademyCareerStageContentTypeFilter } from '../prisma/enum-defined-academy-career-stage-content-type-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedAcademyCareerStageContentScalarWhereInput {

    @Field(() => [DefinedAcademyCareerStageContentScalarWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyCareerStageContentScalarWhereInput>;

    @Field(() => [DefinedAcademyCareerStageContentScalarWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyCareerStageContentScalarWhereInput>;

    @Field(() => [DefinedAcademyCareerStageContentScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyCareerStageContentScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}
