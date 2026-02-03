import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberUpdateManyMutationInput } from './home-ops-household-member-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdMemberWhereInput } from './home-ops-household-member-where.input';

@ArgsType()
export class UpdateManyHomeOpsHouseholdMemberArgs {

    @Field(() => HomeOpsHouseholdMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberUpdateManyMutationInput)
    data!: HomeOpsHouseholdMemberUpdateManyMutationInput;

    @Field(() => HomeOpsHouseholdMemberWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdMemberWhereInput)
    where?: HomeOpsHouseholdMemberWhereInput;
}
