import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateWithoutOwnerInput } from './home-ops-household-create-without-owner.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateOrConnectWithoutOwnerInput } from './home-ops-household-create-or-connect-without-owner.input';
import { HomeOpsHouseholdCreateManyOwnerInputEnvelope } from './home-ops-household-create-many-owner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';

@InputType()
export class HomeOpsHouseholdUncheckedCreateNestedManyWithoutOwnerInput {

    @Field(() => [HomeOpsHouseholdCreateWithoutOwnerInput], {nullable:true})
    @Type(() => HomeOpsHouseholdCreateWithoutOwnerInput)
    create?: Array<HomeOpsHouseholdCreateWithoutOwnerInput>;

    @Field(() => [HomeOpsHouseholdCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => HomeOpsHouseholdCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<HomeOpsHouseholdCreateOrConnectWithoutOwnerInput>;

    @Field(() => HomeOpsHouseholdCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateManyOwnerInputEnvelope)
    createMany?: HomeOpsHouseholdCreateManyOwnerInputEnvelope;

    @Field(() => [HomeOpsHouseholdWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>>;
}
