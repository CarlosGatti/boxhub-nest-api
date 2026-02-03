import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutHomeOpsHouseholdsOwnedInput } from './user-update-without-home-ops-households-owned.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHomeOpsHouseholdsOwnedInput } from './user-create-without-home-ops-households-owned.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutHomeOpsHouseholdsOwnedInput {

    @Field(() => UserUpdateWithoutHomeOpsHouseholdsOwnedInput, {nullable:false})
    @Type(() => UserUpdateWithoutHomeOpsHouseholdsOwnedInput)
    update!: UserUpdateWithoutHomeOpsHouseholdsOwnedInput;

    @Field(() => UserCreateWithoutHomeOpsHouseholdsOwnedInput, {nullable:false})
    @Type(() => UserCreateWithoutHomeOpsHouseholdsOwnedInput)
    create!: UserCreateWithoutHomeOpsHouseholdsOwnedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
