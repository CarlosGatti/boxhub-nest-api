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
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { ProjectRelationFilter } from '../project/project-relation-filter.input';

@InputType()
export class PermitInspectionWhereInput {

    @Field(() => [PermitInspectionWhereInput], {nullable:true})
    AND?: Array<PermitInspectionWhereInput>;

    @Field(() => [PermitInspectionWhereInput], {nullable:true})
    OR?: Array<PermitInspectionWhereInput>;

    @Field(() => [PermitInspectionWhereInput], {nullable:true})
    NOT?: Array<PermitInspectionWhereInput>;

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

    @Field(() => UserNullableRelationFilter, {nullable:true})
    responsible?: UserNullableRelationFilter;

    @Field(() => ProjectRelationFilter, {nullable:true})
    project?: ProjectRelationFilter;
}
