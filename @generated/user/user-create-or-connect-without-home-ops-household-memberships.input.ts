import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHomeOpsHouseholdMembershipsInput } from './user-create-without-home-ops-household-memberships.input';

@InputType()
export class UserCreateOrConnectWithoutHomeOpsHouseholdMembershipsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutHomeOpsHouseholdMembershipsInput, {nullable:false})
    @Type(() => UserCreateWithoutHomeOpsHouseholdMembershipsInput)
    create!: UserCreateWithoutHomeOpsHouseholdMembershipsInput;
}
