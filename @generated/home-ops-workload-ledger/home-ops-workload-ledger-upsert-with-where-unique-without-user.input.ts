import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsWorkloadLedgerWhereUniqueInput } from './home-ops-workload-ledger-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsWorkloadLedgerUpdateWithoutUserInput } from './home-ops-workload-ledger-update-without-user.input';
import { HomeOpsWorkloadLedgerCreateWithoutUserInput } from './home-ops-workload-ledger-create-without-user.input';

@InputType()
export class HomeOpsWorkloadLedgerUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => HomeOpsWorkloadLedgerWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsWorkloadLedgerWhereUniqueInput, 'id' | 'householdId_userId_weekStart'>;

    @Field(() => HomeOpsWorkloadLedgerUpdateWithoutUserInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerUpdateWithoutUserInput)
    update!: HomeOpsWorkloadLedgerUpdateWithoutUserInput;

    @Field(() => HomeOpsWorkloadLedgerCreateWithoutUserInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerCreateWithoutUserInput)
    create!: HomeOpsWorkloadLedgerCreateWithoutUserInput;
}
