import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFeedSourcePreferencesInput } from './user-create-without-feed-source-preferences.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFeedSourcePreferencesInput } from './user-create-or-connect-without-feed-source-preferences.input';
import { UserUpsertWithoutFeedSourcePreferencesInput } from './user-upsert-without-feed-source-preferences.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFeedSourcePreferencesInput } from './user-update-to-one-with-where-without-feed-source-preferences.input';

@InputType()
export class UserUpdateOneRequiredWithoutFeedSourcePreferencesNestedInput {

    @Field(() => UserCreateWithoutFeedSourcePreferencesInput, {nullable:true})
    @Type(() => UserCreateWithoutFeedSourcePreferencesInput)
    create?: UserCreateWithoutFeedSourcePreferencesInput;

    @Field(() => UserCreateOrConnectWithoutFeedSourcePreferencesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFeedSourcePreferencesInput)
    connectOrCreate?: UserCreateOrConnectWithoutFeedSourcePreferencesInput;

    @Field(() => UserUpsertWithoutFeedSourcePreferencesInput, {nullable:true})
    @Type(() => UserUpsertWithoutFeedSourcePreferencesInput)
    upsert?: UserUpsertWithoutFeedSourcePreferencesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFeedSourcePreferencesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFeedSourcePreferencesInput)
    update?: UserUpdateToOneWithWhereWithoutFeedSourcePreferencesInput;
}
