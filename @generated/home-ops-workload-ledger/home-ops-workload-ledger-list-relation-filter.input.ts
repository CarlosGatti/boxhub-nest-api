import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerWhereInput } from './home-ops-workload-ledger-where.input';

@InputType()
export class HomeOpsWorkloadLedgerListRelationFilter {

    @Field(() => HomeOpsWorkloadLedgerWhereInput, {nullable:true})
    every?: HomeOpsWorkloadLedgerWhereInput;

    @Field(() => HomeOpsWorkloadLedgerWhereInput, {nullable:true})
    some?: HomeOpsWorkloadLedgerWhereInput;

    @Field(() => HomeOpsWorkloadLedgerWhereInput, {nullable:true})
    none?: HomeOpsWorkloadLedgerWhereInput;
}
