import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutHomeOpsHouseholdMembershipsInput } from './user-update-without-home-ops-household-memberships.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutHomeOpsHouseholdMembershipsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutHomeOpsHouseholdMembershipsInput, {nullable:false})
    @Type(() => UserUpdateWithoutHomeOpsHouseholdMembershipsInput)
    data!: UserUpdateWithoutHomeOpsHouseholdMembershipsInput;
}
