import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsFrequency } from '../prisma/home-ops-frequency.enum';
import { HomeOpsTaskTemplateCreatedaysOfWeekInput } from './home-ops-task-template-createdays-of-week.input';
import { HomeOpsAssignmentMode } from '../prisma/home-ops-assignment-mode.enum';
import { UserCreateNestedOneWithoutHomeOpsTaskTemplatesCreatedInput } from '../user/user-create-nested-one-without-home-ops-task-templates-created.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutHomeOpsTaskTemplatesAssignedInput } from '../user/user-create-nested-one-without-home-ops-task-templates-assigned.input';
import { HomeOpsTaskTemplateSlotCreateNestedManyWithoutTemplateInput } from '../home-ops-task-template-slot/home-ops-task-template-slot-create-nested-many-without-template.input';
import { HomeOpsTaskInstanceCreateNestedManyWithoutTemplateInput } from '../home-ops-task-instance/home-ops-task-instance-create-nested-many-without-template.input';

@InputType()
export class HomeOpsTaskTemplateCreateWithoutHouseholdInput {

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

    @Field(() => Boolean, {nullable:true})
    isActive?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutHomeOpsTaskTemplatesCreatedInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutHomeOpsTaskTemplatesCreatedInput)
    createdBy!: UserCreateNestedOneWithoutHomeOpsTaskTemplatesCreatedInput;

    @Field(() => UserCreateNestedOneWithoutHomeOpsTaskTemplatesAssignedInput, {nullable:true})
    @Type(() => UserCreateNestedOneWithoutHomeOpsTaskTemplatesAssignedInput)
    fixedAssignee?: UserCreateNestedOneWithoutHomeOpsTaskTemplatesAssignedInput;

    @Field(() => HomeOpsTaskTemplateSlotCreateNestedManyWithoutTemplateInput, {nullable:true})
    slots?: HomeOpsTaskTemplateSlotCreateNestedManyWithoutTemplateInput;

    @Field(() => HomeOpsTaskInstanceCreateNestedManyWithoutTemplateInput, {nullable:true})
    taskInstances?: HomeOpsTaskInstanceCreateNestedManyWithoutTemplateInput;
}
