import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBucketVisionBoardsInput } from './user-create-without-bucket-vision-boards.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBucketVisionBoardsInput } from './user-create-or-connect-without-bucket-vision-boards.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutBucketVisionBoardsInput {

    @Field(() => UserCreateWithoutBucketVisionBoardsInput, {nullable:true})
    @Type(() => UserCreateWithoutBucketVisionBoardsInput)
    create?: UserCreateWithoutBucketVisionBoardsInput;

    @Field(() => UserCreateOrConnectWithoutBucketVisionBoardsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBucketVisionBoardsInput)
    connectOrCreate?: UserCreateOrConnectWithoutBucketVisionBoardsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
