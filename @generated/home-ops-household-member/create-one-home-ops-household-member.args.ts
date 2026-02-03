import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberCreateInput } from './home-ops-household-member-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHomeOpsHouseholdMemberArgs {

    @Field(() => HomeOpsHouseholdMemberCreateInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberCreateInput)
    data!: HomeOpsHouseholdMemberCreateInput;
}
