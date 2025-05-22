import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutStorageMembershipsInput } from './user-update-without-storage-memberships.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutStorageMembershipsInput } from './user-create-without-storage-memberships.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutStorageMembershipsInput {

    @Field(() => UserUpdateWithoutStorageMembershipsInput, {nullable:false})
    @Type(() => UserUpdateWithoutStorageMembershipsInput)
    update!: UserUpdateWithoutStorageMembershipsInput;

    @Field(() => UserCreateWithoutStorageMembershipsInput, {nullable:false})
    @Type(() => UserCreateWithoutStorageMembershipsInput)
    create!: UserCreateWithoutStorageMembershipsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
