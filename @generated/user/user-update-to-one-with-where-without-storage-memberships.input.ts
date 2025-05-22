import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutStorageMembershipsInput } from './user-update-without-storage-memberships.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutStorageMembershipsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutStorageMembershipsInput, {nullable:false})
    @Type(() => UserUpdateWithoutStorageMembershipsInput)
    data!: UserUpdateWithoutStorageMembershipsInput;
}
