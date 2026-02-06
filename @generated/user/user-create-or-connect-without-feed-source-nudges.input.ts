import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFeedSourceNudgesInput } from './user-create-without-feed-source-nudges.input';

@InputType()
export class UserCreateOrConnectWithoutFeedSourceNudgesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutFeedSourceNudgesInput, {nullable:false})
    @Type(() => UserCreateWithoutFeedSourceNudgesInput)
    create!: UserCreateWithoutFeedSourceNudgesInput;
}
