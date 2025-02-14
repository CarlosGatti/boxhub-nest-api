import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAdminCommunitiesInput } from './user-create-without-admin-communities.input';

@InputType()
export class UserCreateOrConnectWithoutAdminCommunitiesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutAdminCommunitiesInput, {nullable:false})
    @Type(() => UserCreateWithoutAdminCommunitiesInput)
    create!: UserCreateWithoutAdminCommunitiesInput;
}
