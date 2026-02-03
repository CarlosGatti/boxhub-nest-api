import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdUpdateWithoutWorkloadLedgersInput } from './home-ops-household-update-without-workload-ledgers.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateWithoutWorkloadLedgersInput } from './home-ops-household-create-without-workload-ledgers.input';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';

@InputType()
export class HomeOpsHouseholdUpsertWithoutWorkloadLedgersInput {

    @Field(() => HomeOpsHouseholdUpdateWithoutWorkloadLedgersInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateWithoutWorkloadLedgersInput)
    update!: HomeOpsHouseholdUpdateWithoutWorkloadLedgersInput;

    @Field(() => HomeOpsHouseholdCreateWithoutWorkloadLedgersInput, {nullable:false})
    @Type(() => HomeOpsHouseholdCreateWithoutWorkloadLedgersInput)
    create!: HomeOpsHouseholdCreateWithoutWorkloadLedgersInput;

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereInput)
    where?: HomeOpsHouseholdWhereInput;
}
