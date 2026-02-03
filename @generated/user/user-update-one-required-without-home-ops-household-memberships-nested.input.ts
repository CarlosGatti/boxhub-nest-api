import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHomeOpsHouseholdMembershipsInput } from './user-create-without-home-ops-household-memberships.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHomeOpsHouseholdMembershipsInput } from './user-create-or-connect-without-home-ops-household-memberships.input';
import { UserUpsertWithoutHomeOpsHouseholdMembershipsInput } from './user-upsert-without-home-ops-household-memberships.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutHomeOpsHouseholdMembershipsInput } from './user-update-to-one-with-where-without-home-ops-household-memberships.input';

@InputType()
export class UserUpdateOneRequiredWithoutHomeOpsHouseholdMembershipsNestedInput {

    @Field(() => UserCreateWithoutHomeOpsHouseholdMembershipsInput, {nullable:true})
    @Type(() => UserCreateWithoutHomeOpsHouseholdMembershipsInput)
    create?: UserCreateWithoutHomeOpsHouseholdMembershipsInput;

    @Field(() => UserCreateOrConnectWithoutHomeOpsHouseholdMembershipsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHomeOpsHouseholdMembershipsInput)
    connectOrCreate?: UserCreateOrConnectWithoutHomeOpsHouseholdMembershipsInput;

    @Field(() => UserUpsertWithoutHomeOpsHouseholdMembershipsInput, {nullable:true})
    @Type(() => UserUpsertWithoutHomeOpsHouseholdMembershipsInput)
    upsert?: UserUpsertWithoutHomeOpsHouseholdMembershipsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutHomeOpsHouseholdMembershipsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutHomeOpsHouseholdMembershipsInput)
    update?: UserUpdateToOneWithWhereWithoutHomeOpsHouseholdMembershipsInput;
}
