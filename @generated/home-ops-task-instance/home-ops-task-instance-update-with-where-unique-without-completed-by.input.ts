import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceUpdateWithoutCompletedByInput } from './home-ops-task-instance-update-without-completed-by.input';

@InputType()
export class HomeOpsTaskInstanceUpdateWithWhereUniqueWithoutCompletedByInput {

    @Field(() => HomeOpsTaskInstanceWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>;

    @Field(() => HomeOpsTaskInstanceUpdateWithoutCompletedByInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceUpdateWithoutCompletedByInput)
    data!: HomeOpsTaskInstanceUpdateWithoutCompletedByInput;
}
