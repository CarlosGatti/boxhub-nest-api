import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateWithoutTaskInstancesInput } from './home-ops-household-create-without-task-instances.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateOrConnectWithoutTaskInstancesInput } from './home-ops-household-create-or-connect-without-task-instances.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';

@InputType()
export class HomeOpsHouseholdCreateNestedOneWithoutTaskInstancesInput {

    @Field(() => HomeOpsHouseholdCreateWithoutTaskInstancesInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateWithoutTaskInstancesInput)
    create?: HomeOpsHouseholdCreateWithoutTaskInstancesInput;

    @Field(() => HomeOpsHouseholdCreateOrConnectWithoutTaskInstancesInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateOrConnectWithoutTaskInstancesInput)
    connectOrCreate?: HomeOpsHouseholdCreateOrConnectWithoutTaskInstancesInput;

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;
}
