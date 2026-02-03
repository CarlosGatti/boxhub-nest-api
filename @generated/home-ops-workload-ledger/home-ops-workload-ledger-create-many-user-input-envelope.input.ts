import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerCreateManyUserInput } from './home-ops-workload-ledger-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsWorkloadLedgerCreateManyUserInputEnvelope {

    @Field(() => [HomeOpsWorkloadLedgerCreateManyUserInput], {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerCreateManyUserInput)
    data!: Array<HomeOpsWorkloadLedgerCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
