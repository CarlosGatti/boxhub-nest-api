import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHomeOpsHouseholdMembershipsInput } from './user-create-without-home-ops-household-memberships.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHomeOpsHouseholdMembershipsInput } from './user-create-or-connect-without-home-ops-household-memberships.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutHomeOpsHouseholdMembershipsInput {

    @Field(() => UserCreateWithoutHomeOpsHouseholdMembershipsInput, {nullable:true})
    @Type(() => UserCreateWithoutHomeOpsHouseholdMembershipsInput)
    create?: UserCreateWithoutHomeOpsHouseholdMembershipsInput;

    @Field(() => UserCreateOrConnectWithoutHomeOpsHouseholdMembershipsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHomeOpsHouseholdMembershipsInput)
    connectOrCreate?: UserCreateOrConnectWithoutHomeOpsHouseholdMembershipsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
