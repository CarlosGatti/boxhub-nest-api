import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBucketVisionBoardsInput } from './user-create-without-bucket-vision-boards.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBucketVisionBoardsInput } from './user-create-or-connect-without-bucket-vision-boards.input';
import { UserUpsertWithoutBucketVisionBoardsInput } from './user-upsert-without-bucket-vision-boards.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutBucketVisionBoardsInput } from './user-update-to-one-with-where-without-bucket-vision-boards.input';

@InputType()
export class UserUpdateOneRequiredWithoutBucketVisionBoardsNestedInput {

    @Field(() => UserCreateWithoutBucketVisionBoardsInput, {nullable:true})
    @Type(() => UserCreateWithoutBucketVisionBoardsInput)
    create?: UserCreateWithoutBucketVisionBoardsInput;

    @Field(() => UserCreateOrConnectWithoutBucketVisionBoardsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBucketVisionBoardsInput)
    connectOrCreate?: UserCreateOrConnectWithoutBucketVisionBoardsInput;

    @Field(() => UserUpsertWithoutBucketVisionBoardsInput, {nullable:true})
    @Type(() => UserUpsertWithoutBucketVisionBoardsInput)
    upsert?: UserUpsertWithoutBucketVisionBoardsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutBucketVisionBoardsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutBucketVisionBoardsInput)
    update?: UserUpdateToOneWithWhereWithoutBucketVisionBoardsInput;
}
