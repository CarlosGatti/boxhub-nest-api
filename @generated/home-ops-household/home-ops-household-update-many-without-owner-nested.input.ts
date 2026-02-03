import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateWithoutOwnerInput } from './home-ops-household-create-without-owner.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateOrConnectWithoutOwnerInput } from './home-ops-household-create-or-connect-without-owner.input';
import { HomeOpsHouseholdUpsertWithWhereUniqueWithoutOwnerInput } from './home-ops-household-upsert-with-where-unique-without-owner.input';
import { HomeOpsHouseholdCreateManyOwnerInputEnvelope } from './home-ops-household-create-many-owner-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { HomeOpsHouseholdUpdateWithWhereUniqueWithoutOwnerInput } from './home-ops-household-update-with-where-unique-without-owner.input';
import { HomeOpsHouseholdUpdateManyWithWhereWithoutOwnerInput } from './home-ops-household-update-many-with-where-without-owner.input';
import { HomeOpsHouseholdScalarWhereInput } from './home-ops-household-scalar-where.input';

@InputType()
export class HomeOpsHouseholdUpdateManyWithoutOwnerNestedInput {

    @Field(() => [HomeOpsHouseholdCreateWithoutOwnerInput], {nullable:true})
    @Type(() => HomeOpsHouseholdCreateWithoutOwnerInput)
    create?: Array<HomeOpsHouseholdCreateWithoutOwnerInput>;

    @Field(() => [HomeOpsHouseholdCreateOrConnectWithoutOwnerInput], {nullable:true})
    @Type(() => HomeOpsHouseholdCreateOrConnectWithoutOwnerInput)
    connectOrCreate?: Array<HomeOpsHouseholdCreateOrConnectWithoutOwnerInput>;

    @Field(() => [HomeOpsHouseholdUpsertWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => HomeOpsHouseholdUpsertWithWhereUniqueWithoutOwnerInput)
    upsert?: Array<HomeOpsHouseholdUpsertWithWhereUniqueWithoutOwnerInput>;

    @Field(() => HomeOpsHouseholdCreateManyOwnerInputEnvelope, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateManyOwnerInputEnvelope)
    createMany?: HomeOpsHouseholdCreateManyOwnerInputEnvelope;

    @Field(() => [HomeOpsHouseholdWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>>;

    @Field(() => [HomeOpsHouseholdWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>>;

    @Field(() => [HomeOpsHouseholdWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>>;

    @Field(() => [HomeOpsHouseholdWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>>;

    @Field(() => [HomeOpsHouseholdUpdateWithWhereUniqueWithoutOwnerInput], {nullable:true})
    @Type(() => HomeOpsHouseholdUpdateWithWhereUniqueWithoutOwnerInput)
    update?: Array<HomeOpsHouseholdUpdateWithWhereUniqueWithoutOwnerInput>;

    @Field(() => [HomeOpsHouseholdUpdateManyWithWhereWithoutOwnerInput], {nullable:true})
    @Type(() => HomeOpsHouseholdUpdateManyWithWhereWithoutOwnerInput)
    updateMany?: Array<HomeOpsHouseholdUpdateManyWithWhereWithoutOwnerInput>;

    @Field(() => [HomeOpsHouseholdScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsHouseholdScalarWhereInput)
    deleteMany?: Array<HomeOpsHouseholdScalarWhereInput>;
}
