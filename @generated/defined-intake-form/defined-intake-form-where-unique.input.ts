import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedIntakeFormWhereInput } from './defined-intake-form-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumDefinedIntakeFormTypeFilter } from '../prisma/enum-defined-intake-form-type-filter.input';
import { EnumDefinedIntakeFormStatusFilter } from '../prisma/enum-defined-intake-form-status-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedClientRelationFilter } from '../defined-client/defined-client-relation-filter.input';
import { Type } from 'class-transformer';
import { DefinedProjectNullableRelationFilter } from '../defined-project/defined-project-nullable-relation-filter.input';
import { DefinedIntakeAnswerListRelationFilter } from '../defined-intake-answer/defined-intake-answer-list-relation-filter.input';

@InputType()
export class DefinedIntakeFormWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    shareToken?: string;

    @Field(() => [DefinedIntakeFormWhereInput], {nullable:true})
    AND?: Array<DefinedIntakeFormWhereInput>;

    @Field(() => [DefinedIntakeFormWhereInput], {nullable:true})
    OR?: Array<DefinedIntakeFormWhereInput>;

    @Field(() => [DefinedIntakeFormWhereInput], {nullable:true})
    NOT?: Array<DefinedIntakeFormWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    clientId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    projectId?: IntNullableFilter;

    @Field(() => EnumDefinedIntakeFormTypeFilter, {nullable:true})
    formType?: EnumDefinedIntakeFormTypeFilter;

    @Field(() => EnumDefinedIntakeFormStatusFilter, {nullable:true})
    status?: EnumDefinedIntakeFormStatusFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    shareTokenCreatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    shareTokenExpiresAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    shareRevokedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    submittedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedClientRelationFilter, {nullable:true})
    @Type(() => DefinedClientRelationFilter)
    client?: DefinedClientRelationFilter;

    @Field(() => DefinedProjectNullableRelationFilter, {nullable:true})
    @Type(() => DefinedProjectNullableRelationFilter)
    project?: DefinedProjectNullableRelationFilter;

    @Field(() => DefinedIntakeAnswerListRelationFilter, {nullable:true})
    answers?: DefinedIntakeAnswerListRelationFilter;
}
