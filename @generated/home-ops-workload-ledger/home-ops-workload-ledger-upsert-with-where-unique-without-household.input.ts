import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsWorkloadLedgerWhereUniqueInput } from './home-ops-workload-ledger-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsWorkloadLedgerUpdateWithoutHouseholdInput } from './home-ops-workload-ledger-update-without-household.input';
import { HomeOpsWorkloadLedgerCreateWithoutHouseholdInput } from './home-ops-workload-ledger-create-without-household.input';

@InputType()
export class HomeOpsWorkloadLedgerUpsertWithWhereUniqueWithoutHouseholdInput {

    @Field(() => HomeOpsWorkloadLedgerWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsWorkloadLedgerWhereUniqueInput, 'id' | 'householdId_userId_weekStart'>;

    @Field(() => HomeOpsWorkloadLedgerUpdateWithoutHouseholdInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerUpdateWithoutHouseholdInput)
    update!: HomeOpsWorkloadLedgerUpdateWithoutHouseholdInput;

    @Field(() => HomeOpsWorkloadLedgerCreateWithoutHouseholdInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerCreateWithoutHouseholdInput)
    create!: HomeOpsWorkloadLedgerCreateWithoutHouseholdInput;
}
