import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateWithoutAppInput } from './home-ops-household-create-without-app.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateOrConnectWithoutAppInput } from './home-ops-household-create-or-connect-without-app.input';
import { HomeOpsHouseholdCreateManyAppInputEnvelope } from './home-ops-household-create-many-app-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';

@InputType()
export class HomeOpsHouseholdCreateNestedManyWithoutAppInput {

    @Field(() => [HomeOpsHouseholdCreateWithoutAppInput], {nullable:true})
    @Type(() => HomeOpsHouseholdCreateWithoutAppInput)
    create?: Array<HomeOpsHouseholdCreateWithoutAppInput>;

    @Field(() => [HomeOpsHouseholdCreateOrConnectWithoutAppInput], {nullable:true})
    @Type(() => HomeOpsHouseholdCreateOrConnectWithoutAppInput)
    connectOrCreate?: Array<HomeOpsHouseholdCreateOrConnectWithoutAppInput>;

    @Field(() => HomeOpsHouseholdCreateManyAppInputEnvelope, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateManyAppInputEnvelope)
    createMany?: HomeOpsHouseholdCreateManyAppInputEnvelope;

    @Field(() => [HomeOpsHouseholdWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>>;
}
