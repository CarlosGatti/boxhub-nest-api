import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateWithoutWorkloadLedgersInput } from './home-ops-household-create-without-workload-ledgers.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateOrConnectWithoutWorkloadLedgersInput } from './home-ops-household-create-or-connect-without-workload-ledgers.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';

@InputType()
export class HomeOpsHouseholdCreateNestedOneWithoutWorkloadLedgersInput {

    @Field(() => HomeOpsHouseholdCreateWithoutWorkloadLedgersInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateWithoutWorkloadLedgersInput)
    create?: HomeOpsHouseholdCreateWithoutWorkloadLedgersInput;

    @Field(() => HomeOpsHouseholdCreateOrConnectWithoutWorkloadLedgersInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateOrConnectWithoutWorkloadLedgersInput)
    connectOrCreate?: HomeOpsHouseholdCreateOrConnectWithoutWorkloadLedgersInput;

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;
}
