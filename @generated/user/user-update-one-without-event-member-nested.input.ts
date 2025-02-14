import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutEventMemberInput } from './user-create-without-event-member.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutEventMemberInput } from './user-create-or-connect-without-event-member.input';
import { UserUpsertWithoutEventMemberInput } from './user-upsert-without-event-member.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutEventMemberInput } from './user-update-to-one-with-where-without-event-member.input';

@InputType()
export class UserUpdateOneWithoutEventMemberNestedInput {

    @Field(() => UserCreateWithoutEventMemberInput, {nullable:true})
    @Type(() => UserCreateWithoutEventMemberInput)
    create?: UserCreateWithoutEventMemberInput;

    @Field(() => UserCreateOrConnectWithoutEventMemberInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutEventMemberInput)
    connectOrCreate?: UserCreateOrConnectWithoutEventMemberInput;

    @Field(() => UserUpsertWithoutEventMemberInput, {nullable:true})
    @Type(() => UserUpsertWithoutEventMemberInput)
    upsert?: UserUpsertWithoutEventMemberInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutEventMemberInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutEventMemberInput)
    update?: UserUpdateToOneWithWhereWithoutEventMemberInput;
}
