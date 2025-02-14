import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAdminCommunitiesInput } from './user-create-without-admin-communities.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAdminCommunitiesInput } from './user-create-or-connect-without-admin-communities.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAdminCommunitiesInput {

    @Field(() => UserCreateWithoutAdminCommunitiesInput, {nullable:true})
    @Type(() => UserCreateWithoutAdminCommunitiesInput)
    create?: UserCreateWithoutAdminCommunitiesInput;

    @Field(() => UserCreateOrConnectWithoutAdminCommunitiesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAdminCommunitiesInput)
    connectOrCreate?: UserCreateOrConnectWithoutAdminCommunitiesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
