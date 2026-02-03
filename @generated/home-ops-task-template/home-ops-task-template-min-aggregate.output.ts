import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsFrequency } from '../prisma/home-ops-frequency.enum';
import { HomeOpsAssignmentMode } from '../prisma/home-ops-assignment-mode.enum';

@ObjectType()
export class HomeOpsTaskTemplateMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    householdId?: number;

    @Field(() => String, {nullable:true})
    title?: string;

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

    @Field(() => HomeOpsFrequency, {nullable:true})
    frequency?: keyof typeof HomeOpsFrequency;

    @Field(() => Int, {nullable:true})
    occurrences?: number;

    @Field(() => Int, {nullable:true})
    interval?: number;

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

    @Field(() => Int, {nullable:true})
    createdById?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
