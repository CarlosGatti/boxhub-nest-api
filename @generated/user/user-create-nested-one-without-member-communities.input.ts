import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMemberCommunitiesInput } from './user-create-without-member-communities.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMemberCommunitiesInput } from './user-create-or-connect-without-member-communities.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMemberCommunitiesInput {

    @Field(() => UserCreateWithoutMemberCommunitiesInput, {nullable:true})
    @Type(() => UserCreateWithoutMemberCommunitiesInput)
    create?: UserCreateWithoutMemberCommunitiesInput;

    @Field(() => UserCreateOrConnectWithoutMemberCommunitiesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMemberCommunitiesInput)
    connectOrCreate?: UserCreateOrConnectWithoutMemberCommunitiesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
