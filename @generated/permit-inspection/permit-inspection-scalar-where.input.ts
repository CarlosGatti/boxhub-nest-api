import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumPermitKindFilter } from '../prisma/enum-permit-kind-filter.input';
import { EnumPermitStatusFilter } from '../prisma/enum-permit-status-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PermitInspectionScalarWhereInput {

    @Field(() => [PermitInspectionScalarWhereInput], {nullable:true})
    AND?: Array<PermitInspectionScalarWhereInput>;

    @Field(() => [PermitInspectionScalarWhereInput], {nullable:true})
    OR?: Array<PermitInspectionScalarWhereInput>;

    @Field(() => [PermitInspectionScalarWhereInput], {nullable:true})
    NOT?: Array<PermitInspectionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    projectId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    number?: StringFilter;

    @Field(() => EnumPermitKindFilter, {nullable:true})
    kind?: EnumPermitKindFilter;

    @Field(() => EnumPermitStatusFilter, {nullable:true})
    status?: EnumPermitStatusFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    requestedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    approvedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fileUrl?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    responsibleId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
