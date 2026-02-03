import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutHomeOpsHouseholdMembershipsInput } from './user-update-without-home-ops-household-memberships.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHomeOpsHouseholdMembershipsInput } from './user-create-without-home-ops-household-memberships.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutHomeOpsHouseholdMembershipsInput {

    @Field(() => UserUpdateWithoutHomeOpsHouseholdMembershipsInput, {nullable:false})
    @Type(() => UserUpdateWithoutHomeOpsHouseholdMembershipsInput)
    update!: UserUpdateWithoutHomeOpsHouseholdMembershipsInput;

    @Field(() => UserCreateWithoutHomeOpsHouseholdMembershipsInput, {nullable:false})
    @Type(() => UserCreateWithoutHomeOpsHouseholdMembershipsInput)
    create!: UserCreateWithoutHomeOpsHouseholdMembershipsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
