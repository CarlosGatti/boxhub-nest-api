import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedProjectServiceType } from '../prisma/defined-project-service-type.enum';
import { DefinedProjectStatus } from '../prisma/defined-project-status.enum';
import { Float } from '@nestjs/graphql';
import { DefinedInternalNoteUncheckedCreateNestedManyWithoutProjectInput } from '../defined-internal-note/defined-internal-note-unchecked-create-nested-many-without-project.input';
import { DefinedIntakeFormUncheckedCreateNestedManyWithoutProjectInput } from '../defined-intake-form/defined-intake-form-unchecked-create-nested-many-without-project.input';
import { DefinedInvoiceUncheckedCreateNestedManyWithoutProjectInput } from '../defined-invoice/defined-invoice-unchecked-create-nested-many-without-project.input';
import { Type } from 'class-transformer';
import { DefinedProposalUncheckedCreateNestedManyWithoutProjectInput } from '../defined-proposal/defined-proposal-unchecked-create-nested-many-without-project.input';
import { PomodoroTaskUncheckedCreateNestedManyWithoutProjectInput } from '../pomodoro-task/pomodoro-task-unchecked-create-nested-many-without-project.input';
import { PomodoroSessionUncheckedCreateNestedManyWithoutProjectInput } from '../pomodoro-session/pomodoro-session-unchecked-create-nested-many-without-project.input';

@InputType()
export class DefinedProjectUncheckedCreateWithoutClientInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => DefinedProjectServiceType, {nullable:false})
    serviceType!: keyof typeof DefinedProjectServiceType;

    @Field(() => DefinedProjectStatus, {nullable:true})
    status?: keyof typeof DefinedProjectStatus;

    @Field(() => Float, {nullable:true})
    budget?: number;

    @Field(() => Date, {nullable:true})
    deadline?: Date | string;

    @Field(() => String, {nullable:true})
    source?: string;

    @Field(() => String, {nullable:true})
    assignedTo?: string;

    @Field(() => Int, {nullable:true})
    supplierId?: number;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedInternalNoteUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    internalNotes?: DefinedInternalNoteUncheckedCreateNestedManyWithoutProjectInput;

    @Field(() => DefinedIntakeFormUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    intakeForms?: DefinedIntakeFormUncheckedCreateNestedManyWithoutProjectInput;

    @Field(() => DefinedInvoiceUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    @Type(() => DefinedInvoiceUncheckedCreateNestedManyWithoutProjectInput)
    invoices?: DefinedInvoiceUncheckedCreateNestedManyWithoutProjectInput;

    @Field(() => DefinedProposalUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    @Type(() => DefinedProposalUncheckedCreateNestedManyWithoutProjectInput)
    proposals?: DefinedProposalUncheckedCreateNestedManyWithoutProjectInput;

    @Field(() => PomodoroTaskUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    pomodoroTasks?: PomodoroTaskUncheckedCreateNestedManyWithoutProjectInput;

    @Field(() => PomodoroSessionUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    pomodoroSessions?: PomodoroSessionUncheckedCreateNestedManyWithoutProjectInput;
}
