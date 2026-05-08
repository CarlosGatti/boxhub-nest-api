import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumDefinedProjectServiceTypeFilter } from '../prisma/enum-defined-project-service-type-filter.input';
import { EnumDefinedProjectStatusFilter } from '../prisma/enum-defined-project-status-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedClientRelationFilter } from '../defined-client/defined-client-relation-filter.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteListRelationFilter } from '../defined-internal-note/defined-internal-note-list-relation-filter.input';
import { DefinedIntakeFormListRelationFilter } from '../defined-intake-form/defined-intake-form-list-relation-filter.input';
import { DefinedInvoiceListRelationFilter } from '../defined-invoice/defined-invoice-list-relation-filter.input';
import { PomodoroTaskListRelationFilter } from '../pomodoro-task/pomodoro-task-list-relation-filter.input';
import { PomodoroSessionListRelationFilter } from '../pomodoro-session/pomodoro-session-list-relation-filter.input';

@InputType()
export class DefinedProjectWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DefinedProjectWhereInput], {nullable:true})
    AND?: Array<DefinedProjectWhereInput>;

    @Field(() => [DefinedProjectWhereInput], {nullable:true})
    OR?: Array<DefinedProjectWhereInput>;

    @Field(() => [DefinedProjectWhereInput], {nullable:true})
    NOT?: Array<DefinedProjectWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    clientId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumDefinedProjectServiceTypeFilter, {nullable:true})
    serviceType?: EnumDefinedProjectServiceTypeFilter;

    @Field(() => EnumDefinedProjectStatusFilter, {nullable:true})
    status?: EnumDefinedProjectStatusFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    budget?: FloatNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deadline?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    source?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    assignedTo?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    supplierId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DefinedClientRelationFilter, {nullable:true})
    @Type(() => DefinedClientRelationFilter)
    client?: DefinedClientRelationFilter;

    @Field(() => DefinedInternalNoteListRelationFilter, {nullable:true})
    internalNotes?: DefinedInternalNoteListRelationFilter;

    @Field(() => DefinedIntakeFormListRelationFilter, {nullable:true})
    intakeForms?: DefinedIntakeFormListRelationFilter;

    @Field(() => DefinedInvoiceListRelationFilter, {nullable:true})
    @Type(() => DefinedInvoiceListRelationFilter)
    invoices?: DefinedInvoiceListRelationFilter;

    @Field(() => PomodoroTaskListRelationFilter, {nullable:true})
    pomodoroTasks?: PomodoroTaskListRelationFilter;

    @Field(() => PomodoroSessionListRelationFilter, {nullable:true})
    pomodoroSessions?: PomodoroSessionListRelationFilter;
}
