import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerCreateInput } from './home-ops-workload-ledger-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHomeOpsWorkloadLedgerArgs {

    @Field(() => HomeOpsWorkloadLedgerCreateInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerCreateInput)
    data!: HomeOpsWorkloadLedgerCreateInput;
}
