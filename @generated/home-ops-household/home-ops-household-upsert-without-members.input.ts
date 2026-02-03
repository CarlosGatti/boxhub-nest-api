import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdUpdateWithoutMembersInput } from './home-ops-household-update-without-members.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateWithoutMembersInput } from './home-ops-household-create-without-members.input';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';

@InputType()
export class HomeOpsHouseholdUpsertWithoutMembersInput {

    @Field(() => HomeOpsHouseholdUpdateWithoutMembersInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateWithoutMembersInput)
    update!: HomeOpsHouseholdUpdateWithoutMembersInput;

    @Field(() => HomeOpsHouseholdCreateWithoutMembersInput, {nullable:false})
    @Type(() => HomeOpsHouseholdCreateWithoutMembersInput)
    create!: HomeOpsHouseholdCreateWithoutMembersInput;

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereInput)
    where?: HomeOpsHouseholdWhereInput;
}
