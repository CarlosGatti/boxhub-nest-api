import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdUpdateWithoutMembersInput } from './home-ops-household-update-without-members.input';

@InputType()
export class HomeOpsHouseholdUpdateToOneWithWhereWithoutMembersInput {

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereInput)
    where?: HomeOpsHouseholdWhereInput;

    @Field(() => HomeOpsHouseholdUpdateWithoutMembersInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateWithoutMembersInput)
    data!: HomeOpsHouseholdUpdateWithoutMembersInput;
}
