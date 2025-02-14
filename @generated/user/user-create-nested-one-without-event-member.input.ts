import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEventMemberInput } from './user-create-without-event-member.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEventMemberInput } from './user-create-or-connect-without-event-member.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutEventMemberInput {

    @Field(() => UserCreateWithoutEventMemberInput, {nullable:true})
    @Type(() => UserCreateWithoutEventMemberInput)
    create?: UserCreateWithoutEventMemberInput;

    @Field(() => UserCreateOrConnectWithoutEventMemberInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEventMemberInput)
    connectOrCreate?: UserCreateOrConnectWithoutEventMemberInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
