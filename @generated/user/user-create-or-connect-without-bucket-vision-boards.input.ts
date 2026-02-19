import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBucketVisionBoardsInput } from './user-create-without-bucket-vision-boards.input';

@InputType()
export class UserCreateOrConnectWithoutBucketVisionBoardsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutBucketVisionBoardsInput, {nullable:false})
    @Type(() => UserCreateWithoutBucketVisionBoardsInput)
    create!: UserCreateWithoutBucketVisionBoardsInput;
}
