import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateInput } from './home-ops-household-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHomeOpsHouseholdArgs {

    @Field(() => HomeOpsHouseholdCreateInput, {nullable:false})
    @Type(() => HomeOpsHouseholdCreateInput)
    data!: HomeOpsHouseholdCreateInput;
}
