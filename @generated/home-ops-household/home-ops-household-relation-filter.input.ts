import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';

@InputType()
export class HomeOpsHouseholdRelationFilter {

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    is?: HomeOpsHouseholdWhereInput;

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    isNot?: HomeOpsHouseholdWhereInput;
}
