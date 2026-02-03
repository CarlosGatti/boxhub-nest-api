import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberWhereInput } from './home-ops-household-member-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHomeOpsHouseholdMemberArgs {

    @Field(() => HomeOpsHouseholdMemberWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdMemberWhereInput)
    where?: HomeOpsHouseholdMemberWhereInput;
}
