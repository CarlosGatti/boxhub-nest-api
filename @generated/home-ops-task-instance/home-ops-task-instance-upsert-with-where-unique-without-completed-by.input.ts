import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceUpdateWithoutCompletedByInput } from './home-ops-task-instance-update-without-completed-by.input';
import { HomeOpsTaskInstanceCreateWithoutCompletedByInput } from './home-ops-task-instance-create-without-completed-by.input';

@InputType()
export class HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutCompletedByInput {

    @Field(() => HomeOpsTaskInstanceWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>;

    @Field(() => HomeOpsTaskInstanceUpdateWithoutCompletedByInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceUpdateWithoutCompletedByInput)
    update!: HomeOpsTaskInstanceUpdateWithoutCompletedByInput;

    @Field(() => HomeOpsTaskInstanceCreateWithoutCompletedByInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceCreateWithoutCompletedByInput)
    create!: HomeOpsTaskInstanceCreateWithoutCompletedByInput;
}
