import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerCreateWithoutUserInput } from './home-ops-workload-ledger-create-without-user.input';
import { Type } from 'class-transformer';
import { HomeOpsWorkloadLedgerCreateOrConnectWithoutUserInput } from './home-ops-workload-ledger-create-or-connect-without-user.input';
import { HomeOpsWorkloadLedgerCreateManyUserInputEnvelope } from './home-ops-workload-ledger-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsWorkloadLedgerWhereUniqueInput } from './home-ops-workload-ledger-where-unique.input';

@InputType()
export class HomeOpsWorkloadLedgerCreateNestedManyWithoutUserInput {

    @Field(() => [HomeOpsWorkloadLedgerCreateWithoutUserInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerCreateWithoutUserInput)
    create?: Array<HomeOpsWorkloadLedgerCreateWithoutUserInput>;

    @Field(() => [HomeOpsWorkloadLedgerCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<HomeOpsWorkloadLedgerCreateOrConnectWithoutUserInput>;

    @Field(() => HomeOpsWorkloadLedgerCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerCreateManyUserInputEnvelope)
    createMany?: HomeOpsWorkloadLedgerCreateManyUserInputEnvelope;

    @Field(() => [HomeOpsWorkloadLedgerWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsWorkloadLedgerWhereUniqueInput, 'id' | 'householdId_userId_weekStart'>>;
}
