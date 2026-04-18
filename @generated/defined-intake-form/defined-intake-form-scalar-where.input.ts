import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { EnumDefinedIntakeFormTypeFilter } from '../prisma/enum-defined-intake-form-type-filter.input';
import { EnumDefinedIntakeFormStatusFilter } from '../prisma/enum-defined-intake-form-status-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedIntakeFormScalarWhereInput {

    @Field(() => [DefinedIntakeFormScalarWhereInput], {nullable:true})
    AND?: Array<DefinedIntakeFormScalarWhereInput>;

    @Field(() => [DefinedIntakeFormScalarWhereInput], {nullable:true})
    OR?: Array<DefinedIntakeFormScalarWhereInput>;

    @Field(() => [DefinedIntakeFormScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedIntakeFormScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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

    @Field(() => StringNullableFilter, {nullable:true})
    shareToken?: StringNullableFilter;

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
}
