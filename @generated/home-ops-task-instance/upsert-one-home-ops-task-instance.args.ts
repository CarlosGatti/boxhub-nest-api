import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceCreateInput } from './home-ops-task-instance-create.input';
import { HomeOpsTaskInstanceUpdateInput } from './home-ops-task-instance-update.input';

@ArgsType()
export class UpsertOneHomeOpsTaskInstanceArgs {

    @Field(() => HomeOpsTaskInstanceWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>;

    @Field(() => HomeOpsTaskInstanceCreateInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceCreateInput)
    create!: HomeOpsTaskInstanceCreateInput;

    @Field(() => HomeOpsTaskInstanceUpdateInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceUpdateInput)
    update!: HomeOpsTaskInstanceUpdateInput;
}
