import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutHomeOpsHouseholdsOwnedInput } from './user-update-without-home-ops-households-owned.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutHomeOpsHouseholdsOwnedInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutHomeOpsHouseholdsOwnedInput, {nullable:false})
    @Type(() => UserUpdateWithoutHomeOpsHouseholdsOwnedInput)
    data!: UserUpdateWithoutHomeOpsHouseholdsOwnedInput;
}
