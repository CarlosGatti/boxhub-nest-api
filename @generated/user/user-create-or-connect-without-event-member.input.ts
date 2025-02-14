import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutEventMemberInput } from './user-create-without-event-member.input';

@InputType()
export class UserCreateOrConnectWithoutEventMemberInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutEventMemberInput, {nullable:false})
    @Type(() => UserCreateWithoutEventMemberInput)
    create!: UserCreateWithoutEventMemberInput;
}
