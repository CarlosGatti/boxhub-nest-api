import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberCreateWithoutUserInput } from './home-ops-household-member-create-without-user.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdMemberCreateOrConnectWithoutUserInput } from './home-ops-household-member-create-or-connect-without-user.input';
import { HomeOpsHouseholdMemberUpsertWithWhereUniqueWithoutUserInput } from './home-ops-household-member-upsert-with-where-unique-without-user.input';
import { HomeOpsHouseholdMemberCreateManyUserInputEnvelope } from './home-ops-household-member-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdMemberWhereUniqueInput } from './home-ops-household-member-where-unique.input';
import { HomeOpsHouseholdMemberUpdateWithWhereUniqueWithoutUserInput } from './home-ops-household-member-update-with-where-unique-without-user.input';
import { HomeOpsHouseholdMemberUpdateManyWithWhereWithoutUserInput } from './home-ops-household-member-update-many-with-where-without-user.input';
import { HomeOpsHouseholdMemberScalarWhereInput } from './home-ops-household-member-scalar-where.input';

@InputType()
export class HomeOpsHouseholdMemberUpdateManyWithoutUserNestedInput {

    @Field(() => [HomeOpsHouseholdMemberCreateWithoutUserInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberCreateWithoutUserInput)
    create?: Array<HomeOpsHouseholdMemberCreateWithoutUserInput>;

    @Field(() => [HomeOpsHouseholdMemberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<HomeOpsHouseholdMemberCreateOrConnectWithoutUserInput>;

    @Field(() => [HomeOpsHouseholdMemberUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<HomeOpsHouseholdMemberUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => HomeOpsHouseholdMemberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => HomeOpsHouseholdMemberCreateManyUserInputEnvelope)
    createMany?: HomeOpsHouseholdMemberCreateManyUserInputEnvelope;

    @Field(() => [HomeOpsHouseholdMemberWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>>;

    @Field(() => [HomeOpsHouseholdMemberWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>>;

    @Field(() => [HomeOpsHouseholdMemberWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>>;

    @Field(() => [HomeOpsHouseholdMemberWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>>;

    @Field(() => [HomeOpsHouseholdMemberUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<HomeOpsHouseholdMemberUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [HomeOpsHouseholdMemberUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<HomeOpsHouseholdMemberUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [HomeOpsHouseholdMemberScalarWhereInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberScalarWhereInput)
    deleteMany?: Array<HomeOpsHouseholdMemberScalarWhereInput>;
}
