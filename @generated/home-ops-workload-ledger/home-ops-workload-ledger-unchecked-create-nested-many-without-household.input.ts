import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerCreateWithoutHouseholdInput } from './home-ops-workload-ledger-create-without-household.input';
import { Type } from 'class-transformer';
import { HomeOpsWorkloadLedgerCreateOrConnectWithoutHouseholdInput } from './home-ops-workload-ledger-create-or-connect-without-household.input';
import { HomeOpsWorkloadLedgerCreateManyHouseholdInputEnvelope } from './home-ops-workload-ledger-create-many-household-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsWorkloadLedgerWhereUniqueInput } from './home-ops-workload-ledger-where-unique.input';

@InputType()
export class HomeOpsWorkloadLedgerUncheckedCreateNestedManyWithoutHouseholdInput {

    @Field(() => [HomeOpsWorkloadLedgerCreateWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerCreateWithoutHouseholdInput)
    create?: Array<HomeOpsWorkloadLedgerCreateWithoutHouseholdInput>;

    @Field(() => [HomeOpsWorkloadLedgerCreateOrConnectWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerCreateOrConnectWithoutHouseholdInput)
    connectOrCreate?: Array<HomeOpsWorkloadLedgerCreateOrConnectWithoutHouseholdInput>;

    @Field(() => HomeOpsWorkloadLedgerCreateManyHouseholdInputEnvelope, {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerCreateManyHouseholdInputEnvelope)
    createMany?: HomeOpsWorkloadLedgerCreateManyHouseholdInputEnvelope;

    @Field(() => [HomeOpsWorkloadLedgerWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsWorkloadLedgerWhereUniqueInput, 'id' | 'householdId_userId_weekStart'>>;
}
