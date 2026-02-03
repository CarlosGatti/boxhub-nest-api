import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneHomeOpsTaskInstanceArgs {

    @Field(() => HomeOpsTaskInstanceWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>;
}
