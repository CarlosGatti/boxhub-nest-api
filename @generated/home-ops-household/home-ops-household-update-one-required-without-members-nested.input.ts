import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateWithoutMembersInput } from './home-ops-household-create-without-members.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateOrConnectWithoutMembersInput } from './home-ops-household-create-or-connect-without-members.input';
import { HomeOpsHouseholdUpsertWithoutMembersInput } from './home-ops-household-upsert-without-members.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { HomeOpsHouseholdUpdateToOneWithWhereWithoutMembersInput } from './home-ops-household-update-to-one-with-where-without-members.input';

@InputType()
export class HomeOpsHouseholdUpdateOneRequiredWithoutMembersNestedInput {

    @Field(() => HomeOpsHouseholdCreateWithoutMembersInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateWithoutMembersInput)
    create?: HomeOpsHouseholdCreateWithoutMembersInput;

    @Field(() => HomeOpsHouseholdCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateOrConnectWithoutMembersInput)
    connectOrCreate?: HomeOpsHouseholdCreateOrConnectWithoutMembersInput;

    @Field(() => HomeOpsHouseholdUpsertWithoutMembersInput, {nullable:true})
    @Type(() => HomeOpsHouseholdUpsertWithoutMembersInput)
    upsert?: HomeOpsHouseholdUpsertWithoutMembersInput;

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdUpdateToOneWithWhereWithoutMembersInput, {nullable:true})
    @Type(() => HomeOpsHouseholdUpdateToOneWithWhereWithoutMembersInput)
    update?: HomeOpsHouseholdUpdateToOneWithWhereWithoutMembersInput;
}
