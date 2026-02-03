import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskStatus } from '../prisma/home-ops-task-status.enum';

@InputType()
export class HomeOpsTaskInstanceCreateManyHouseholdInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    templateId?: number;

    @Field(() => Int, {nullable:true})
    weeklyPlanId?: number;

    @Field(() => String, {nullable:true})
    sourceKey?: string;

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

    @Field(() => Date, {nullable:false})
    dueDate!: Date | string;

    @Field(() => String, {nullable:true})
    slotLabel?: string;

    @Field(() => String, {nullable:true})
    windowStart?: string;

    @Field(() => String, {nullable:true})
    windowEnd?: string;

    @Field(() => Int, {nullable:true})
    assigneeId?: number;

    @Field(() => HomeOpsTaskStatus, {nullable:true})
    status?: keyof typeof HomeOpsTaskStatus;

    @Field(() => Date, {nullable:true})
    completedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    completedById?: number;

    @Field(() => Date, {nullable:true})
    skippedAt?: Date | string;

    @Field(() => String, {nullable:true})
    skipReason?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
