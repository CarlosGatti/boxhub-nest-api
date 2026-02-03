import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerUpdateInput } from './home-ops-workload-ledger-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { HomeOpsWorkloadLedgerWhereUniqueInput } from './home-ops-workload-ledger-where-unique.input';

@ArgsType()
export class UpdateOneHomeOpsWorkloadLedgerArgs {

    @Field(() => HomeOpsWorkloadLedgerUpdateInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerUpdateInput)
    data!: HomeOpsWorkloadLedgerUpdateInput;

    @Field(() => HomeOpsWorkloadLedgerWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsWorkloadLedgerWhereUniqueInput, 'id' | 'householdId_userId_weekStart'>;
}
