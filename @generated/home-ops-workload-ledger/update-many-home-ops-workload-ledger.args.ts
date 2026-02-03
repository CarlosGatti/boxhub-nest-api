import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerUpdateManyMutationInput } from './home-ops-workload-ledger-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HomeOpsWorkloadLedgerWhereInput } from './home-ops-workload-ledger-where.input';

@ArgsType()
export class UpdateManyHomeOpsWorkloadLedgerArgs {

    @Field(() => HomeOpsWorkloadLedgerUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerUpdateManyMutationInput)
    data!: HomeOpsWorkloadLedgerUpdateManyMutationInput;

    @Field(() => HomeOpsWorkloadLedgerWhereInput, {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerWhereInput)
    where?: HomeOpsWorkloadLedgerWhereInput;
}
