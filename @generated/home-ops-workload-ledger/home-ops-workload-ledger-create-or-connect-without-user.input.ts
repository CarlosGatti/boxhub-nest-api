import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsWorkloadLedgerWhereUniqueInput } from './home-ops-workload-ledger-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsWorkloadLedgerCreateWithoutUserInput } from './home-ops-workload-ledger-create-without-user.input';

@InputType()
export class HomeOpsWorkloadLedgerCreateOrConnectWithoutUserInput {

    @Field(() => HomeOpsWorkloadLedgerWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsWorkloadLedgerWhereUniqueInput, 'id' | 'householdId_userId_weekStart'>;

    @Field(() => HomeOpsWorkloadLedgerCreateWithoutUserInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerCreateWithoutUserInput)
    create!: HomeOpsWorkloadLedgerCreateWithoutUserInput;
}
