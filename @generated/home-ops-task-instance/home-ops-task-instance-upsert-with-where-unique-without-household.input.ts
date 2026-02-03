import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceUpdateWithoutHouseholdInput } from './home-ops-task-instance-update-without-household.input';
import { HomeOpsTaskInstanceCreateWithoutHouseholdInput } from './home-ops-task-instance-create-without-household.input';

@InputType()
export class HomeOpsTaskInstanceUpsertWithWhereUniqueWithoutHouseholdInput {

    @Field(() => HomeOpsTaskInstanceWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>;

    @Field(() => HomeOpsTaskInstanceUpdateWithoutHouseholdInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceUpdateWithoutHouseholdInput)
    update!: HomeOpsTaskInstanceUpdateWithoutHouseholdInput;

    @Field(() => HomeOpsTaskInstanceCreateWithoutHouseholdInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceCreateWithoutHouseholdInput)
    create!: HomeOpsTaskInstanceCreateWithoutHouseholdInput;
}
