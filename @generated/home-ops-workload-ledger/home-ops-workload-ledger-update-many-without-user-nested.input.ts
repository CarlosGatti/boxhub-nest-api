import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsWorkloadLedgerCreateWithoutUserInput } from './home-ops-workload-ledger-create-without-user.input';
import { Type } from 'class-transformer';
import { HomeOpsWorkloadLedgerCreateOrConnectWithoutUserInput } from './home-ops-workload-ledger-create-or-connect-without-user.input';
import { HomeOpsWorkloadLedgerUpsertWithWhereUniqueWithoutUserInput } from './home-ops-workload-ledger-upsert-with-where-unique-without-user.input';
import { HomeOpsWorkloadLedgerCreateManyUserInputEnvelope } from './home-ops-workload-ledger-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsWorkloadLedgerWhereUniqueInput } from './home-ops-workload-ledger-where-unique.input';
import { HomeOpsWorkloadLedgerUpdateWithWhereUniqueWithoutUserInput } from './home-ops-workload-ledger-update-with-where-unique-without-user.input';
import { HomeOpsWorkloadLedgerUpdateManyWithWhereWithoutUserInput } from './home-ops-workload-ledger-update-many-with-where-without-user.input';
import { HomeOpsWorkloadLedgerScalarWhereInput } from './home-ops-workload-ledger-scalar-where.input';

@InputType()
export class HomeOpsWorkloadLedgerUpdateManyWithoutUserNestedInput {

    @Field(() => [HomeOpsWorkloadLedgerCreateWithoutUserInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerCreateWithoutUserInput)
    create?: Array<HomeOpsWorkloadLedgerCreateWithoutUserInput>;

    @Field(() => [HomeOpsWorkloadLedgerCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<HomeOpsWorkloadLedgerCreateOrConnectWithoutUserInput>;

    @Field(() => [HomeOpsWorkloadLedgerUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<HomeOpsWorkloadLedgerUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => HomeOpsWorkloadLedgerCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerCreateManyUserInputEnvelope)
    createMany?: HomeOpsWorkloadLedgerCreateManyUserInputEnvelope;

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

    @Field(() => [HomeOpsWorkloadLedgerUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<HomeOpsWorkloadLedgerUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [HomeOpsWorkloadLedgerUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<HomeOpsWorkloadLedgerUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [HomeOpsWorkloadLedgerScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsWorkloadLedgerScalarWhereInput)
    deleteMany?: Array<HomeOpsWorkloadLedgerScalarWhereInput>;
}
