import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFeedSourceNudgesInput } from './user-create-without-feed-source-nudges.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFeedSourceNudgesInput } from './user-create-or-connect-without-feed-source-nudges.input';
import { UserUpsertWithoutFeedSourceNudgesInput } from './user-upsert-without-feed-source-nudges.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFeedSourceNudgesInput } from './user-update-to-one-with-where-without-feed-source-nudges.input';

@InputType()
export class UserUpdateOneRequiredWithoutFeedSourceNudgesNestedInput {

    @Field(() => UserCreateWithoutFeedSourceNudgesInput, {nullable:true})
    @Type(() => UserCreateWithoutFeedSourceNudgesInput)
    create?: UserCreateWithoutFeedSourceNudgesInput;

    @Field(() => UserCreateOrConnectWithoutFeedSourceNudgesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFeedSourceNudgesInput)
    connectOrCreate?: UserCreateOrConnectWithoutFeedSourceNudgesInput;

    @Field(() => UserUpsertWithoutFeedSourceNudgesInput, {nullable:true})
    @Type(() => UserUpsertWithoutFeedSourceNudgesInput)
    upsert?: UserUpsertWithoutFeedSourceNudgesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFeedSourceNudgesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFeedSourceNudgesInput)
    update?: UserUpdateToOneWithWhereWithoutFeedSourceNudgesInput;
}
