import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedClientOrderByWithRelationInput } from '../defined-client/defined-client-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteOrderByRelationAggregateInput } from '../defined-internal-note/defined-internal-note-order-by-relation-aggregate.input';
import { DefinedIntakeFormOrderByRelationAggregateInput } from '../defined-intake-form/defined-intake-form-order-by-relation-aggregate.input';
import { DefinedInvoiceOrderByRelationAggregateInput } from '../defined-invoice/defined-invoice-order-by-relation-aggregate.input';
import { DefinedProposalOrderByRelationAggregateInput } from '../defined-proposal/defined-proposal-order-by-relation-aggregate.input';
import { PomodoroTaskOrderByRelationAggregateInput } from '../pomodoro-task/pomodoro-task-order-by-relation-aggregate.input';
import { PomodoroSessionOrderByRelationAggregateInput } from '../pomodoro-session/pomodoro-session-order-by-relation-aggregate.input';

@InputType()
export class DefinedProjectOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serviceType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    budget?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deadline?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    source?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    assignedTo?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    supplierId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedClientOrderByWithRelationInput, {nullable:true})
    @Type(() => DefinedClientOrderByWithRelationInput)
    client?: DefinedClientOrderByWithRelationInput;

    @Field(() => DefinedInternalNoteOrderByRelationAggregateInput, {nullable:true})
    internalNotes?: DefinedInternalNoteOrderByRelationAggregateInput;

    @Field(() => DefinedIntakeFormOrderByRelationAggregateInput, {nullable:true})
    intakeForms?: DefinedIntakeFormOrderByRelationAggregateInput;

    @Field(() => DefinedInvoiceOrderByRelationAggregateInput, {nullable:true})
    @Type(() => DefinedInvoiceOrderByRelationAggregateInput)
    invoices?: DefinedInvoiceOrderByRelationAggregateInput;

    @Field(() => DefinedProposalOrderByRelationAggregateInput, {nullable:true})
    @Type(() => DefinedProposalOrderByRelationAggregateInput)
    proposals?: DefinedProposalOrderByRelationAggregateInput;

    @Field(() => PomodoroTaskOrderByRelationAggregateInput, {nullable:true})
    pomodoroTasks?: PomodoroTaskOrderByRelationAggregateInput;

    @Field(() => PomodoroSessionOrderByRelationAggregateInput, {nullable:true})
    pomodoroSessions?: PomodoroSessionOrderByRelationAggregateInput;
}
