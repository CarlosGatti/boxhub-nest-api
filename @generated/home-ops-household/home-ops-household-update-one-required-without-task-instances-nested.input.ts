import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateWithoutTaskInstancesInput } from './home-ops-household-create-without-task-instances.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateOrConnectWithoutTaskInstancesInput } from './home-ops-household-create-or-connect-without-task-instances.input';
import { HomeOpsHouseholdUpsertWithoutTaskInstancesInput } from './home-ops-household-upsert-without-task-instances.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { HomeOpsHouseholdUpdateToOneWithWhereWithoutTaskInstancesInput } from './home-ops-household-update-to-one-with-where-without-task-instances.input';

@InputType()
export class HomeOpsHouseholdUpdateOneRequiredWithoutTaskInstancesNestedInput {

    @Field(() => HomeOpsHouseholdCreateWithoutTaskInstancesInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateWithoutTaskInstancesInput)
    create?: HomeOpsHouseholdCreateWithoutTaskInstancesInput;

    @Field(() => HomeOpsHouseholdCreateOrConnectWithoutTaskInstancesInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateOrConnectWithoutTaskInstancesInput)
    connectOrCreate?: HomeOpsHouseholdCreateOrConnectWithoutTaskInstancesInput;

    @Field(() => HomeOpsHouseholdUpsertWithoutTaskInstancesInput, {nullable:true})
    @Type(() => HomeOpsHouseholdUpsertWithoutTaskInstancesInput)
    upsert?: HomeOpsHouseholdUpsertWithoutTaskInstancesInput;

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdUpdateToOneWithWhereWithoutTaskInstancesInput, {nullable:true})
    @Type(() => HomeOpsHouseholdUpdateToOneWithWhereWithoutTaskInstancesInput)
    update?: HomeOpsHouseholdUpdateToOneWithWhereWithoutTaskInstancesInput;
}
