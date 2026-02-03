import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberWhereInput } from './home-ops-household-member-where.input';

@InputType()
export class HomeOpsHouseholdMemberListRelationFilter {

    @Field(() => HomeOpsHouseholdMemberWhereInput, {nullable:true})
    every?: HomeOpsHouseholdMemberWhereInput;

    @Field(() => HomeOpsHouseholdMemberWhereInput, {nullable:true})
    some?: HomeOpsHouseholdMemberWhereInput;

    @Field(() => HomeOpsHouseholdMemberWhereInput, {nullable:true})
    none?: HomeOpsHouseholdMemberWhereInput;
}
