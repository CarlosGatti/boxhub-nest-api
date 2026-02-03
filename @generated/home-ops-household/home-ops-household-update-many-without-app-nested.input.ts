import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateWithoutAppInput } from './home-ops-household-create-without-app.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateOrConnectWithoutAppInput } from './home-ops-household-create-or-connect-without-app.input';
import { HomeOpsHouseholdUpsertWithWhereUniqueWithoutAppInput } from './home-ops-household-upsert-with-where-unique-without-app.input';
import { HomeOpsHouseholdCreateManyAppInputEnvelope } from './home-ops-household-create-many-app-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { HomeOpsHouseholdUpdateWithWhereUniqueWithoutAppInput } from './home-ops-household-update-with-where-unique-without-app.input';
import { HomeOpsHouseholdUpdateManyWithWhereWithoutAppInput } from './home-ops-household-update-many-with-where-without-app.input';
import { HomeOpsHouseholdScalarWhereInput } from './home-ops-household-scalar-where.input';

@InputType()
export class HomeOpsHouseholdUpdateManyWithoutAppNestedInput {

    @Field(() => [HomeOpsHouseholdCreateWithoutAppInput], {nullable:true})
    @Type(() => HomeOpsHouseholdCreateWithoutAppInput)
    create?: Array<HomeOpsHouseholdCreateWithoutAppInput>;

    @Field(() => [HomeOpsHouseholdCreateOrConnectWithoutAppInput], {nullable:true})
    @Type(() => HomeOpsHouseholdCreateOrConnectWithoutAppInput)
    connectOrCreate?: Array<HomeOpsHouseholdCreateOrConnectWithoutAppInput>;

    @Field(() => [HomeOpsHouseholdUpsertWithWhereUniqueWithoutAppInput], {nullable:true})
    @Type(() => HomeOpsHouseholdUpsertWithWhereUniqueWithoutAppInput)
    upsert?: Array<HomeOpsHouseholdUpsertWithWhereUniqueWithoutAppInput>;

    @Field(() => HomeOpsHouseholdCreateManyAppInputEnvelope, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateManyAppInputEnvelope)
    createMany?: HomeOpsHouseholdCreateManyAppInputEnvelope;

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

    @Field(() => [HomeOpsHouseholdUpdateWithWhereUniqueWithoutAppInput], {nullable:true})
    @Type(() => HomeOpsHouseholdUpdateWithWhereUniqueWithoutAppInput)
    update?: Array<HomeOpsHouseholdUpdateWithWhereUniqueWithoutAppInput>;

    @Field(() => [HomeOpsHouseholdUpdateManyWithWhereWithoutAppInput], {nullable:true})
    @Type(() => HomeOpsHouseholdUpdateManyWithWhereWithoutAppInput)
    updateMany?: Array<HomeOpsHouseholdUpdateManyWithWhereWithoutAppInput>;

    @Field(() => [HomeOpsHouseholdScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsHouseholdScalarWhereInput)
    deleteMany?: Array<HomeOpsHouseholdScalarWhereInput>;
}
