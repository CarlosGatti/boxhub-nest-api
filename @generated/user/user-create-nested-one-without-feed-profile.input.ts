import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFeedProfileInput } from './user-create-without-feed-profile.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFeedProfileInput } from './user-create-or-connect-without-feed-profile.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFeedProfileInput {

    @Field(() => UserCreateWithoutFeedProfileInput, {nullable:true})
    @Type(() => UserCreateWithoutFeedProfileInput)
    create?: UserCreateWithoutFeedProfileInput;

    @Field(() => UserCreateOrConnectWithoutFeedProfileInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFeedProfileInput)
    connectOrCreate?: UserCreateOrConnectWithoutFeedProfileInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
