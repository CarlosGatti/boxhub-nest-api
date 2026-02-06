import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFeedSourcePreferencesInput } from './user-create-without-feed-source-preferences.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFeedSourcePreferencesInput } from './user-create-or-connect-without-feed-source-preferences.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFeedSourcePreferencesInput {

    @Field(() => UserCreateWithoutFeedSourcePreferencesInput, {nullable:true})
    @Type(() => UserCreateWithoutFeedSourcePreferencesInput)
    create?: UserCreateWithoutFeedSourcePreferencesInput;

    @Field(() => UserCreateOrConnectWithoutFeedSourcePreferencesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFeedSourcePreferencesInput)
    connectOrCreate?: UserCreateOrConnectWithoutFeedSourcePreferencesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
