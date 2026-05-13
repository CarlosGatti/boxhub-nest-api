import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectServiceType } from '../prisma/defined-project-service-type.enum';
import { DefinedProjectStatus } from '../prisma/defined-project-status.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedClientCreateNestedOneWithoutProjectsInput } from '../defined-client/defined-client-create-nested-one-without-projects.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteCreateNestedManyWithoutProjectInput } from '../defined-internal-note/defined-internal-note-create-nested-many-without-project.input';
import { DefinedIntakeFormCreateNestedManyWithoutProjectInput } from '../defined-intake-form/defined-intake-form-create-nested-many-without-project.input';
import { DefinedInvoiceCreateNestedManyWithoutProjectInput } from '../defined-invoice/defined-invoice-create-nested-many-without-project.input';
import { PomodoroTaskCreateNestedManyWithoutProjectInput } from '../pomodoro-task/pomodoro-task-create-nested-many-without-project.input';
import { PomodoroSessionCreateNestedManyWithoutProjectInput } from '../pomodoro-session/pomodoro-session-create-nested-many-without-project.input';

@InputType()
export class DefinedProjectCreateWithoutProposalsInput {

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

    @Field(() => DefinedClientCreateNestedOneWithoutProjectsInput, {nullable:false})
    @Type(() => DefinedClientCreateNestedOneWithoutProjectsInput)
    client!: DefinedClientCreateNestedOneWithoutProjectsInput;

    @Field(() => DefinedInternalNoteCreateNestedManyWithoutProjectInput, {nullable:true})
    internalNotes?: DefinedInternalNoteCreateNestedManyWithoutProjectInput;

    @Field(() => DefinedIntakeFormCreateNestedManyWithoutProjectInput, {nullable:true})
    intakeForms?: DefinedIntakeFormCreateNestedManyWithoutProjectInput;

    @Field(() => DefinedInvoiceCreateNestedManyWithoutProjectInput, {nullable:true})
    @Type(() => DefinedInvoiceCreateNestedManyWithoutProjectInput)
    invoices?: DefinedInvoiceCreateNestedManyWithoutProjectInput;

    @Field(() => PomodoroTaskCreateNestedManyWithoutProjectInput, {nullable:true})
    pomodoroTasks?: PomodoroTaskCreateNestedManyWithoutProjectInput;

    @Field(() => PomodoroSessionCreateNestedManyWithoutProjectInput, {nullable:true})
    pomodoroSessions?: PomodoroSessionCreateNestedManyWithoutProjectInput;
}
