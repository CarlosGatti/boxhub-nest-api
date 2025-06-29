import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLogCommentsInput } from './user-create-without-log-comments.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLogCommentsInput } from './user-create-or-connect-without-log-comments.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutLogCommentsInput {

    @Field(() => UserCreateWithoutLogCommentsInput, {nullable:true})
    @Type(() => UserCreateWithoutLogCommentsInput)
    create?: UserCreateWithoutLogCommentsInput;

    @Field(() => UserCreateOrConnectWithoutLogCommentsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLogCommentsInput)
    connectOrCreate?: UserCreateOrConnectWithoutLogCommentsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
