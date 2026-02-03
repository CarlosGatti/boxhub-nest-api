import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerScalarWhereInput } from './home-ops-workload-ledger-scalar-where.input';
import { Type } from 'class-transformer';
import { HomeOpsWorkloadLedgerUpdateManyMutationInput } from './home-ops-workload-ledger-update-many-mutation.input';

@InputType()
export class HomeOpsWorkloadLedgerUpdateManyWithWhereWithoutHouseholdInput {

    @Field(() => HomeOpsWorkloadLedgerScalarWhereInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerScalarWhereInput)
    where!: HomeOpsWorkloadLedgerScalarWhereInput;

    @Field(() => HomeOpsWorkloadLedgerUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerUpdateManyMutationInput)
    data!: HomeOpsWorkloadLedgerUpdateManyMutationInput;
}
