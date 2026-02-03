import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateWithoutMembersInput } from './home-ops-household-create-without-members.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateOrConnectWithoutMembersInput } from './home-ops-household-create-or-connect-without-members.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';

@InputType()
export class HomeOpsHouseholdCreateNestedOneWithoutMembersInput {

    @Field(() => HomeOpsHouseholdCreateWithoutMembersInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateWithoutMembersInput)
    create?: HomeOpsHouseholdCreateWithoutMembersInput;

    @Field(() => HomeOpsHouseholdCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateOrConnectWithoutMembersInput)
    connectOrCreate?: HomeOpsHouseholdCreateOrConnectWithoutMembersInput;

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;
}
