import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAdminCommunitiesInput } from './user-create-without-admin-communities.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAdminCommunitiesInput } from './user-create-or-connect-without-admin-communities.input';
import { UserUpsertWithoutAdminCommunitiesInput } from './user-upsert-without-admin-communities.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAdminCommunitiesInput } from './user-update-to-one-with-where-without-admin-communities.input';

@InputType()
export class UserUpdateOneWithoutAdminCommunitiesNestedInput {

    @Field(() => UserCreateWithoutAdminCommunitiesInput, {nullable:true})
    @Type(() => UserCreateWithoutAdminCommunitiesInput)
    create?: UserCreateWithoutAdminCommunitiesInput;

    @Field(() => UserCreateOrConnectWithoutAdminCommunitiesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAdminCommunitiesInput)
    connectOrCreate?: UserCreateOrConnectWithoutAdminCommunitiesInput;

    @Field(() => UserUpsertWithoutAdminCommunitiesInput, {nullable:true})
    @Type(() => UserUpsertWithoutAdminCommunitiesInput)
    upsert?: UserUpsertWithoutAdminCommunitiesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAdminCommunitiesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAdminCommunitiesInput)
    update?: UserUpdateToOneWithWhereWithoutAdminCommunitiesInput;
}
