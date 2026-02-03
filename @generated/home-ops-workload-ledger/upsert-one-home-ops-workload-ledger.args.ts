import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsWorkloadLedgerWhereUniqueInput } from './home-ops-workload-ledger-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsWorkloadLedgerCreateInput } from './home-ops-workload-ledger-create.input';
import { HomeOpsWorkloadLedgerUpdateInput } from './home-ops-workload-ledger-update.input';

@ArgsType()
export class UpsertOneHomeOpsWorkloadLedgerArgs {

    @Field(() => HomeOpsWorkloadLedgerWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsWorkloadLedgerWhereUniqueInput, 'id' | 'householdId_userId_weekStart'>;

    @Field(() => HomeOpsWorkloadLedgerCreateInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerCreateInput)
    create!: HomeOpsWorkloadLedgerCreateInput;

    @Field(() => HomeOpsWorkloadLedgerUpdateInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerUpdateInput)
    update!: HomeOpsWorkloadLedgerUpdateInput;
}
