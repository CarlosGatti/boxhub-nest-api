import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLogCommentsInput } from './user-create-without-log-comments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLogCommentsInput } from './user-create-or-connect-without-log-comments.input';
import { UserUpsertWithoutLogCommentsInput } from './user-upsert-without-log-comments.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutLogCommentsInput } from './user-update-to-one-with-where-without-log-comments.input';

@InputType()
export class UserUpdateOneRequiredWithoutLogCommentsNestedInput {

    @Field(() => UserCreateWithoutLogCommentsInput, {nullable:true})
    @Type(() => UserCreateWithoutLogCommentsInput)
    create?: UserCreateWithoutLogCommentsInput;

    @Field(() => UserCreateOrConnectWithoutLogCommentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLogCommentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutLogCommentsInput;

    @Field(() => UserUpsertWithoutLogCommentsInput, {nullable:true})
    @Type(() => UserUpsertWithoutLogCommentsInput)
    upsert?: UserUpsertWithoutLogCommentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutLogCommentsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutLogCommentsInput)
    update?: UserUpdateToOneWithWhereWithoutLogCommentsInput;
}
