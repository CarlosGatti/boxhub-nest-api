import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';

@InputType()
export class HomeOpsHouseholdListRelationFilter {

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    every?: HomeOpsHouseholdWhereInput;

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    some?: HomeOpsHouseholdWhereInput;

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    none?: HomeOpsHouseholdWhereInput;
}
