import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFeedSourceNudgesInput } from './user-create-without-feed-source-nudges.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFeedSourceNudgesInput } from './user-create-or-connect-without-feed-source-nudges.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFeedSourceNudgesInput {

    @Field(() => UserCreateWithoutFeedSourceNudgesInput, {nullable:true})
    @Type(() => UserCreateWithoutFeedSourceNudgesInput)
    create?: UserCreateWithoutFeedSourceNudgesInput;

    @Field(() => UserCreateOrConnectWithoutFeedSourceNudgesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFeedSourceNudgesInput)
    connectOrCreate?: UserCreateOrConnectWithoutFeedSourceNudgesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
