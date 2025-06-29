import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumPermitKindWithAggregatesFilter } from '../prisma/enum-permit-kind-with-aggregates-filter.input';
import { EnumPermitStatusWithAggregatesFilter } from '../prisma/enum-permit-status-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PermitInspectionScalarWhereWithAggregatesInput {

    @Field(() => [PermitInspectionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PermitInspectionScalarWhereWithAggregatesInput>;

    @Field(() => [PermitInspectionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PermitInspectionScalarWhereWithAggregatesInput>;

    @Field(() => [PermitInspectionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PermitInspectionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    projectId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    number?: StringWithAggregatesFilter;

    @Field(() => EnumPermitKindWithAggregatesFilter, {nullable:true})
    kind?: EnumPermitKindWithAggregatesFilter;

    @Field(() => EnumPermitStatusWithAggregatesFilter, {nullable:true})
    status?: EnumPermitStatusWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    requestedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    approvedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    fileUrl?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    responsibleId?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
