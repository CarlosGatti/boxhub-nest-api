import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceUpdateWithoutAssigneeInput } from './home-ops-task-instance-update-without-assignee.input';
import { HomeOpsTaskInstanceCreateWithoutAssigneeInput } from './home-ops-task-instance-create-without-assignee.input';

@InputType()
export class HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutAssigneeInput {

    @Field(() => HomeOpsTaskInstanceWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>;

    @Field(() => HomeOpsTaskInstanceUpdateWithoutAssigneeInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceUpdateWithoutAssigneeInput)
    update!: HomeOpsTaskInstanceUpdateWithoutAssigneeInput;

    @Field(() => HomeOpsTaskInstanceCreateWithoutAssigneeInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceCreateWithoutAssigneeInput)
    create!: HomeOpsTaskInstanceCreateWithoutAssigneeInput;
}
