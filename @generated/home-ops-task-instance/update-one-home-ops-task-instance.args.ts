import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceUpdateInput } from './home-ops-task-instance-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';

@ArgsType()
export class UpdateOneHomeOpsTaskInstanceArgs {

    @Field(() => HomeOpsTaskInstanceUpdateInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceUpdateInput)
    data!: HomeOpsTaskInstanceUpdateInput;

    @Field(() => HomeOpsTaskInstanceWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>;
}
