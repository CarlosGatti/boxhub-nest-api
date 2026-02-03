import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceCreateWithoutAssigneeInput } from './home-ops-task-instance-create-without-assignee.input';

@InputType()
export class HomeOpsTaskInstanceCreateOrConnectWithoutAssigneeInput {

    @Field(() => HomeOpsTaskInstanceWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>;

    @Field(() => HomeOpsTaskInstanceCreateWithoutAssigneeInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceCreateWithoutAssigneeInput)
    create!: HomeOpsTaskInstanceCreateWithoutAssigneeInput;
}
