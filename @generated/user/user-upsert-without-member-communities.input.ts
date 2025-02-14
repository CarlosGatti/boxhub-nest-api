import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMemberCommunitiesInput } from './user-update-without-member-communities.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMemberCommunitiesInput } from './user-create-without-member-communities.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutMemberCommunitiesInput {

    @Field(() => UserUpdateWithoutMemberCommunitiesInput, {nullable:false})
    @Type(() => UserUpdateWithoutMemberCommunitiesInput)
    update!: UserUpdateWithoutMemberCommunitiesInput;

    @Field(() => UserCreateWithoutMemberCommunitiesInput, {nullable:false})
    @Type(() => UserCreateWithoutMemberCommunitiesInput)
    create!: UserCreateWithoutMemberCommunitiesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
