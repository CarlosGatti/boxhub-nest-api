import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateNestedOneWithoutWorkloadLedgersInput } from '../home-ops-household/home-ops-household-create-nested-one-without-workload-ledgers.input';
import { UserCreateNestedOneWithoutHomeOpsWorkloadLedgersInput } from '../user/user-create-nested-one-without-home-ops-workload-ledgers.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsWorkloadLedgerCreateInput {

    @Field(() => Date, {nullable:false})
    weekStart!: Date | string;

    @Field(() => Int, {nullable:true})
    pointsCompleted?: number;

    @Field(() => Int, {nullable:true})
    minutesCompleted?: number;

    @Field(() => Int, {nullable:true})
    tasksCompleted?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => HomeOpsHouseholdCreateNestedOneWithoutWorkloadLedgersInput, {nullable:false})
    household!: HomeOpsHouseholdCreateNestedOneWithoutWorkloadLedgersInput;

    @Field(() => UserCreateNestedOneWithoutHomeOpsWorkloadLedgersInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutHomeOpsWorkloadLedgersInput)
    user!: UserCreateNestedOneWithoutHomeOpsWorkloadLedgersInput;
}
