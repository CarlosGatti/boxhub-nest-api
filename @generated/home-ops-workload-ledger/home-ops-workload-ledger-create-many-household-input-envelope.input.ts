import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerCreateManyHouseholdInput } from './home-ops-workload-ledger-create-many-household.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsWorkloadLedgerCreateManyHouseholdInputEnvelope {

    @Field(() => [HomeOpsWorkloadLedgerCreateManyHouseholdInput], {nullable:false})
    @Type(() => HomeOpsWorkloadLedgerCreateManyHouseholdInput)
    data!: Array<HomeOpsWorkloadLedgerCreateManyHouseholdInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
