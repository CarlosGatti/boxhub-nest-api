import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateWithoutTaskInstancesInput } from './home-ops-household-create-without-task-instances.input';

@InputType()
export class HomeOpsHouseholdCreateOrConnectWithoutTaskInstancesInput {

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdCreateWithoutTaskInstancesInput, {nullable:false})
    @Type(() => HomeOpsHouseholdCreateWithoutTaskInstancesInput)
    create!: HomeOpsHouseholdCreateWithoutTaskInstancesInput;
}
