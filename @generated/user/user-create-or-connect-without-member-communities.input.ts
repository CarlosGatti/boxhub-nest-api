import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutMemberCommunitiesInput } from './user-create-without-member-communities.input';

@InputType()
export class UserCreateOrConnectWithoutMemberCommunitiesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutMemberCommunitiesInput, {nullable:false})
    @Type(() => UserCreateWithoutMemberCommunitiesInput)
    create!: UserCreateWithoutMemberCommunitiesInput;
}
