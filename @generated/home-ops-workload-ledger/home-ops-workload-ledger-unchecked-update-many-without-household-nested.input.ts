import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerCreateWithoutHouseholdInput } from './home-ops-workload-ledger-create-without-household.input';
import { Type } from 'class-transformer';
import { HomeOpsWorkloadLedgerCreateOrConnectWithoutHouseholdInput } from './home-ops-workload-ledger-create-or-connect-without-household.input';
import { HomeOpsWorkloadLedgerUpsertWithWhereUniqueWithoutHouseholdInput } from './home-ops-workload-ledger-upsert-with-where-unique-without-household.input';
import { HomeOpsWorkloadLedgerCreateManyHouseholdInputEnvelope } from './home-ops-workload-ledger-create-many-household-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsWorkloadLedgerWhereUniqueInput } from './home-ops-workload-ledger-where-unique.input';
import { HomeOpsWorkloadLedgerUpdateWithWhereUniqueWithoutHouseholdInput } from './home-ops-workload-ledger-update-with-where-unique-without-household.input';
import { HomeOpsWorkloadLedgerUpdateManyWithWhereWithoutHouseholdInput } from './home-ops-workload-ledger-update-many-with-where-without-household.input';
import { HomeOpsWorkloadLedgerScalarWhereInput } from './home-ops-workload-ledger-scalar-where.input';

@InputType()
export class HomeOpsWorkloadLedgerUncheckedUpdateManyWithoutHouseholdNestedInput {

    @Field(() => [HomeOpsWorkloadLedgerCreateWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerCreateWithoutHouseholdInput)
    create?: Array<HomeOpsWorkloadLedgerCreateWithoutHouseholdInput>;

    @Field(() => [HomeOpsWorkloadLedgerCreateOrConnectWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerCreateOrConnectWithoutHouseholdInput)
    connectOrCreate?: Array<HomeOpsWorkloadLedgerCreateOrConnectWithoutHouseholdInput>;

    @Field(() => [HomeOpsWorkloadLedgerUpsertWithWhereUniqueWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerUpsertWithWhereUniqueWithoutHouseholdInput)
    upsert?: Array<HomeOpsWorkloadLedgerUpsertWithWhereUniqueWithoutHouseholdInput>;

    @Field(() => HomeOpsWorkloadLedgerCreateManyHouseholdInputEnvelope, {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerCreateManyHouseholdInputEnvelope)
    createMany?: HomeOpsWorkloadLedgerCreateManyHouseholdInputEnvelope;

    @Field(() => [HomeOpsWorkloadLedgerWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HomeOpsWorkloadLedgerWhereUniqueInput, 'id' | 'householdId_userId_weekStart'>>;

    @Field(() => [HomeOpsWorkloadLedgerWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HomeOpsWorkloadLedgerWhereUniqueInput, 'id' | 'householdId_userId_weekStart'>>;

    @Field(() => [HomeOpsWorkloadLedgerWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HomeOpsWorkloadLedgerWhereUniqueInput, 'id' | 'householdId_userId_weekStart'>>;

    @Field(() => [HomeOpsWorkloadLedgerWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsWorkloadLedgerWhereUniqueInput, 'id' | 'householdId_userId_weekStart'>>;

    @Field(() => [HomeOpsWorkloadLedgerUpdateWithWhereUniqueWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerUpdateWithWhereUniqueWithoutHouseholdInput)
    update?: Array<HomeOpsWorkloadLedgerUpdateWithWhereUniqueWithoutHouseholdInput>;

    @Field(() => [HomeOpsWorkloadLedgerUpdateManyWithWhereWithoutHouseholdInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerUpdateManyWithWhereWithoutHouseholdInput)
    updateMany?: Array<HomeOpsWorkloadLedgerUpdateManyWithWhereWithoutHouseholdInput>;

    @Field(() => [HomeOpsWorkloadLedgerScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerScalarWhereInput)
    deleteMany?: Array<HomeOpsWorkloadLedgerScalarWhereInput>;
}
