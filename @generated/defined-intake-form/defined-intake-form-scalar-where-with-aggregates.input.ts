import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { EnumDefinedIntakeFormTypeWithAggregatesFilter } from '../prisma/enum-defined-intake-form-type-with-aggregates-filter.input';
import { EnumDefinedIntakeFormStatusWithAggregatesFilter } from '../prisma/enum-defined-intake-form-status-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedIntakeFormScalarWhereWithAggregatesInput {

    @Field(() => [DefinedIntakeFormScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedIntakeFormScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedIntakeFormScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedIntakeFormScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedIntakeFormScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedIntakeFormScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    clientId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    projectId?: IntNullableWithAggregatesFilter;

    @Field(() => EnumDefinedIntakeFormTypeWithAggregatesFilter, {nullable:true})
    formType?: EnumDefinedIntakeFormTypeWithAggregatesFilter;

    @Field(() => EnumDefinedIntakeFormStatusWithAggregatesFilter, {nullable:true})
    status?: EnumDefinedIntakeFormStatusWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    shareToken?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    shareTokenCreatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    shareTokenExpiresAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    shareRevokedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    submittedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
