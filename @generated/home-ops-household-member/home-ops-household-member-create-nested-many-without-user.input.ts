import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberCreateWithoutUserInput } from './home-ops-household-member-create-without-user.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdMemberCreateOrConnectWithoutUserInput } from './home-ops-household-member-create-or-connect-without-user.input';
import { HomeOpsHouseholdMemberCreateManyUserInputEnvelope } from './home-ops-household-member-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdMemberWhereUniqueInput } from './home-ops-household-member-where-unique.input';

@InputType()
export class HomeOpsHouseholdMemberCreateNestedManyWithoutUserInput {

    @Field(() => [HomeOpsHouseholdMemberCreateWithoutUserInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberCreateWithoutUserInput)
    create?: Array<HomeOpsHouseholdMemberCreateWithoutUserInput>;

    @Field(() => [HomeOpsHouseholdMemberCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<HomeOpsHouseholdMemberCreateOrConnectWithoutUserInput>;

    @Field(() => HomeOpsHouseholdMemberCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => HomeOpsHouseholdMemberCreateManyUserInputEnvelope)
    createMany?: HomeOpsHouseholdMemberCreateManyUserInputEnvelope;

    @Field(() => [HomeOpsHouseholdMemberWhereUniqueInput], {nullable:true})
    @Type(() => HomeOpsHouseholdMemberWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HomeOpsHouseholdMemberWhereUniqueInput, 'id' | 'householdId_userId'>>;
}
