import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerCreateManyInput } from './home-ops-workload-ledger-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHomeOpsWorkloadLedgerArgs {

    @Field(() => [HomeOpsWorkloadLedgerCreateManyInput], {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerCreateManyInput)
    data!: Array<HomeOpsWorkloadLedgerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
