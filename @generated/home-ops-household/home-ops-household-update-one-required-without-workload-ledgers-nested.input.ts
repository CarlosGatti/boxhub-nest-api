import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateWithoutWorkloadLedgersInput } from './home-ops-household-create-without-workload-ledgers.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateOrConnectWithoutWorkloadLedgersInput } from './home-ops-household-create-or-connect-without-workload-ledgers.input';
import { HomeOpsHouseholdUpsertWithoutWorkloadLedgersInput } from './home-ops-household-upsert-without-workload-ledgers.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { HomeOpsHouseholdUpdateToOneWithWhereWithoutWorkloadLedgersInput } from './home-ops-household-update-to-one-with-where-without-workload-ledgers.input';

@InputType()
export class HomeOpsHouseholdUpdateOneRequiredWithoutWorkloadLedgersNestedInput {

    @Field(() => HomeOpsHouseholdCreateWithoutWorkloadLedgersInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateWithoutWorkloadLedgersInput)
    create?: HomeOpsHouseholdCreateWithoutWorkloadLedgersInput;

    @Field(() => HomeOpsHouseholdCreateOrConnectWithoutWorkloadLedgersInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateOrConnectWithoutWorkloadLedgersInput)
    connectOrCreate?: HomeOpsHouseholdCreateOrConnectWithoutWorkloadLedgersInput;

    @Field(() => HomeOpsHouseholdUpsertWithoutWorkloadLedgersInput, {nullable:true})
    @Type(() => HomeOpsHouseholdUpsertWithoutWorkloadLedgersInput)
    upsert?: HomeOpsHouseholdUpsertWithoutWorkloadLedgersInput;

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdUpdateToOneWithWhereWithoutWorkloadLedgersInput, {nullable:true})
    @Type(() => HomeOpsHouseholdUpdateToOneWithWhereWithoutWorkloadLedgersInput)
    update?: HomeOpsHouseholdUpdateToOneWithWhereWithoutWorkloadLedgersInput;
}
