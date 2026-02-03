import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdMemberScalarWhereInput } from './home-ops-household-member-scalar-where.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdMemberUpdateManyMutationInput } from './home-ops-household-member-update-many-mutation.input';

@InputType()
export class HomeOpsHouseholdMemberUpdateManyWithWhereWithoutHouseholdInput {

    @Field(() => HomeOpsHouseholdMemberScalarWhereInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberScalarWhereInput)
    where!: HomeOpsHouseholdMemberScalarWhereInput;

    @Field(() => HomeOpsHouseholdMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeOpsHouseholdMemberUpdateManyMutationInput)
    data!: HomeOpsHouseholdMemberUpdateManyMutationInput;
}
