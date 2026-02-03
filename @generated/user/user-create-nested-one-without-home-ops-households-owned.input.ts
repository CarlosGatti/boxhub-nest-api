import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHomeOpsHouseholdsOwnedInput } from './user-create-without-home-ops-households-owned.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHomeOpsHouseholdsOwnedInput } from './user-create-or-connect-without-home-ops-households-owned.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutHomeOpsHouseholdsOwnedInput {

    @Field(() => UserCreateWithoutHomeOpsHouseholdsOwnedInput, {nullable:true})
    @Type(() => UserCreateWithoutHomeOpsHouseholdsOwnedInput)
    create?: UserCreateWithoutHomeOpsHouseholdsOwnedInput;

    @Field(() => UserCreateOrConnectWithoutHomeOpsHouseholdsOwnedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHomeOpsHouseholdsOwnedInput)
    connectOrCreate?: UserCreateOrConnectWithoutHomeOpsHouseholdsOwnedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
