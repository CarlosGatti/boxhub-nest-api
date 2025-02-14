import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAdminCommunitiesInput } from './user-update-without-admin-communities.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAdminCommunitiesInput } from './user-create-without-admin-communities.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAdminCommunitiesInput {

    @Field(() => UserUpdateWithoutAdminCommunitiesInput, {nullable:false})
    @Type(() => UserUpdateWithoutAdminCommunitiesInput)
    update!: UserUpdateWithoutAdminCommunitiesInput;

    @Field(() => UserCreateWithoutAdminCommunitiesInput, {nullable:false})
    @Type(() => UserCreateWithoutAdminCommunitiesInput)
    create!: UserCreateWithoutAdminCommunitiesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
