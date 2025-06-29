import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLogCommentsInput } from './user-create-without-log-comments.input';

@InputType()
export class UserCreateOrConnectWithoutLogCommentsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutLogCommentsInput, {nullable:false})
    @Type(() => UserCreateWithoutLogCommentsInput)
    create!: UserCreateWithoutLogCommentsInput;
}
