import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHomeOpsHouseholdsOwnedInput } from './user-create-without-home-ops-households-owned.input';

@InputType()
export class UserCreateOrConnectWithoutHomeOpsHouseholdsOwnedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutHomeOpsHouseholdsOwnedInput, {nullable:false})
    @Type(() => UserCreateWithoutHomeOpsHouseholdsOwnedInput)
    create!: UserCreateWithoutHomeOpsHouseholdsOwnedInput;
}
