import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdUpdateWithoutWorkloadLedgersInput } from './home-ops-household-update-without-workload-ledgers.input';

@InputType()
export class HomeOpsHouseholdUpdateToOneWithWhereWithoutWorkloadLedgersInput {

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereInput)
    where?: HomeOpsHouseholdWhereInput;

    @Field(() => HomeOpsHouseholdUpdateWithoutWorkloadLedgersInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateWithoutWorkloadLedgersInput)
    data!: HomeOpsHouseholdUpdateWithoutWorkloadLedgersInput;
}
