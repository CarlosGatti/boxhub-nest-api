import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHomeOpsHouseholdsOwnedInput } from './user-create-without-home-ops-households-owned.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHomeOpsHouseholdsOwnedInput } from './user-create-or-connect-without-home-ops-households-owned.input';
import { UserUpsertWithoutHomeOpsHouseholdsOwnedInput } from './user-upsert-without-home-ops-households-owned.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutHomeOpsHouseholdsOwnedInput } from './user-update-to-one-with-where-without-home-ops-households-owned.input';

@InputType()
export class UserUpdateOneRequiredWithoutHomeOpsHouseholdsOwnedNestedInput {

    @Field(() => UserCreateWithoutHomeOpsHouseholdsOwnedInput, {nullable:true})
    @Type(() => UserCreateWithoutHomeOpsHouseholdsOwnedInput)
    create?: UserCreateWithoutHomeOpsHouseholdsOwnedInput;

    @Field(() => UserCreateOrConnectWithoutHomeOpsHouseholdsOwnedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHomeOpsHouseholdsOwnedInput)
    connectOrCreate?: UserCreateOrConnectWithoutHomeOpsHouseholdsOwnedInput;

    @Field(() => UserUpsertWithoutHomeOpsHouseholdsOwnedInput, {nullable:true})
    @Type(() => UserUpsertWithoutHomeOpsHouseholdsOwnedInput)
    upsert?: UserUpsertWithoutHomeOpsHouseholdsOwnedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutHomeOpsHouseholdsOwnedInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutHomeOpsHouseholdsOwnedInput)
    update?: UserUpdateToOneWithWhereWithoutHomeOpsHouseholdsOwnedInput;
}
