import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceCreateWithoutHouseholdInput } from './home-ops-task-instance-create-without-household.input';

@InputType()
export class HomeOpsTaskInstanceCreateOrConnectWithoutHouseholdInput {

    @Field(() => HomeOpsTaskInstanceWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>;

    @Field(() => HomeOpsTaskInstanceCreateWithoutHouseholdInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceCreateWithoutHouseholdInput)
    create!: HomeOpsTaskInstanceCreateWithoutHouseholdInput;
}
