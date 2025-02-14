import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAdminCommunitiesInput } from './user-update-without-admin-communities.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAdminCommunitiesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAdminCommunitiesInput, {nullable:false})
    @Type(() => UserUpdateWithoutAdminCommunitiesInput)
    data!: UserUpdateWithoutAdminCommunitiesInput;
}
