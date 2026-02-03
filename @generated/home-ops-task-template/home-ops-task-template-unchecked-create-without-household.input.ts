import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsFrequency } from '../prisma/home-ops-frequency.enum';
import { HomeOpsTaskTemplateCreatedaysOfWeekInput } from './home-ops-task-template-createdays-of-week.input';
import { HomeOpsAssignmentMode } from '../prisma/home-ops-assignment-mode.enum';
import { HomeOpsTaskTemplateSlotUncheckedCreateNestedManyWithoutTemplateInput } from '../home-ops-task-template-slot/home-ops-task-template-slot-unchecked-create-nested-many-without-template.input';
import { HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutTemplateInput } from '../home-ops-task-instance/home-ops-task-instance-unchecked-create-nested-many-without-template.input';

@InputType()
export class HomeOpsTaskTemplateUncheckedCreateWithoutHouseholdInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => Int, {nullable:true})
    points?: number;

    @Field(() => Int, {nullable:true})
    effortWeight?: number;

    @Field(() => Int, {nullable:true})
    estimatedMinutes?: number;

    @Field(() => HomeOpsFrequency, {nullable:false})
    frequency!: keyof typeof HomeOpsFrequency;

    @Field(() => Int, {nullable:true})
    occurrences?: number;

    @Field(() => Int, {nullable:true})
    interval?: number;

    @Field(() => HomeOpsTaskTemplateCreatedaysOfWeekInput, {nullable:true})
    daysOfWeek?: HomeOpsTaskTemplateCreatedaysOfWeekInput;

    @Field(() => Int, {nullable:true})
    dayOfMonth?: number;

    @Field(() => String, {nullable:true})
    timezone?: string;

    @Field(() => HomeOpsAssignmentMode, {nullable:true})
    assignmentMode?: keyof typeof HomeOpsAssignmentMode;

    @Field(() => Int, {nullable:true})
    fixedAssigneeId?: number;

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Int, {nullable:false})
    createdById!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => HomeOpsTaskTemplateSlotUncheckedCreateNestedManyWithoutTemplateInput, {nullable:true})
    slots?: HomeOpsTaskTemplateSlotUncheckedCreateNestedManyWithoutTemplateInput;

    @Field(() => HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutTemplateInput, {nullable:true})
    taskInstances?: HomeOpsTaskInstanceUncheckedCreateNestedManyWithoutTemplateInput;
}
