import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutMemberCommunitiesInput } from './user-create-without-member-communities.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutMemberCommunitiesInput } from './user-create-or-connect-without-member-communities.input';
import { UserUpsertWithoutMemberCommunitiesInput } from './user-upsert-without-member-communities.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutMemberCommunitiesInput } from './user-update-to-one-with-where-without-member-communities.input';

@InputType()
export class UserUpdateOneWithoutMemberCommunitiesNestedInput {

    @Field(() => UserCreateWithoutMemberCommunitiesInput, {nullable:true})
    @Type(() => UserCreateWithoutMemberCommunitiesInput)
    create?: UserCreateWithoutMemberCommunitiesInput;

    @Field(() => UserCreateOrConnectWithoutMemberCommunitiesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutMemberCommunitiesInput)
    connectOrCreate?: UserCreateOrConnectWithoutMemberCommunitiesInput;

    @Field(() => UserUpsertWithoutMemberCommunitiesInput, {nullable:true})
    @Type(() => UserUpsertWithoutMemberCommunitiesInput)
    upsert?: UserUpsertWithoutMemberCommunitiesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutMemberCommunitiesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutMemberCommunitiesInput)
    update?: UserUpdateToOneWithWhereWithoutMemberCommunitiesInput;
}
