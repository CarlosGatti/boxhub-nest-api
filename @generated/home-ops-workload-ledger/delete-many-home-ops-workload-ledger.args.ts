import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerWhereInput } from './home-ops-workload-ledger-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHomeOpsWorkloadLedgerArgs {

    @Field(() => HomeOpsWorkloadLedgerWhereInput, {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerWhereInput)
    where?: HomeOpsWorkloadLedgerWhereInput;
}
