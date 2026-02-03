import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerWhereInput } from './home-ops-workload-ledger-where.input';
import { Type } from 'class-transformer';
import { HomeOpsWorkloadLedgerOrderByWithRelationInput } from './home-ops-workload-ledger-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HomeOpsWorkloadLedgerWhereUniqueInput } from './home-ops-workload-ledger-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerScalarFieldEnum } from './home-ops-workload-ledger-scalar-field.enum';

@ArgsType()
export class FindManyHomeOpsWorkloadLedgerArgs {

    @Field(() => HomeOpsWorkloadLedgerWhereInput, {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerWhereInput)
    where?: HomeOpsWorkloadLedgerWhereInput;

    @Field(() => [HomeOpsWorkloadLedgerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeOpsWorkloadLedgerOrderByWithRelationInput>;

    @Field(() => HomeOpsWorkloadLedgerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeOpsWorkloadLedgerWhereUniqueInput, 'id' | 'householdId_userId_weekStart'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HomeOpsWorkloadLedgerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HomeOpsWorkloadLedgerScalarFieldEnum>;
}
