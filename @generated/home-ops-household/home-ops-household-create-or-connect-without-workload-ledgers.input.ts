import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateWithoutWorkloadLedgersInput } from './home-ops-household-create-without-workload-ledgers.input';

@InputType()
export class HomeOpsHouseholdCreateOrConnectWithoutWorkloadLedgersInput {

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdCreateWithoutWorkloadLedgersInput, {nullable:false})
    @Type(() => HomeOpsHouseholdCreateWithoutWorkloadLedgersInput)
    create!: HomeOpsHouseholdCreateWithoutWorkloadLedgersInput;
}
