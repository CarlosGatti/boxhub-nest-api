import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFeedProfileInput } from './user-create-without-feed-profile.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFeedProfileInput } from './user-create-or-connect-without-feed-profile.input';
import { UserUpsertWithoutFeedProfileInput } from './user-upsert-without-feed-profile.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFeedProfileInput } from './user-update-to-one-with-where-without-feed-profile.input';

@InputType()
export class UserUpdateOneRequiredWithoutFeedProfileNestedInput {

    @Field(() => UserCreateWithoutFeedProfileInput, {nullable:true})
    @Type(() => UserCreateWithoutFeedProfileInput)
    create?: UserCreateWithoutFeedProfileInput;

    @Field(() => UserCreateOrConnectWithoutFeedProfileInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFeedProfileInput)
    connectOrCreate?: UserCreateOrConnectWithoutFeedProfileInput;

    @Field(() => UserUpsertWithoutFeedProfileInput, {nullable:true})
    @Type(() => UserUpsertWithoutFeedProfileInput)
    upsert?: UserUpsertWithoutFeedProfileInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFeedProfileInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFeedProfileInput)
    update?: UserUpdateToOneWithWhereWithoutFeedProfileInput;
}
