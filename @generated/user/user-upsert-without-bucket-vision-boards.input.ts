import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutBucketVisionBoardsInput } from './user-update-without-bucket-vision-boards.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBucketVisionBoardsInput } from './user-create-without-bucket-vision-boards.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutBucketVisionBoardsInput {

    @Field(() => UserUpdateWithoutBucketVisionBoardsInput, {nullable:false})
    @Type(() => UserUpdateWithoutBucketVisionBoardsInput)
    update!: UserUpdateWithoutBucketVisionBoardsInput;

    @Field(() => UserCreateWithoutBucketVisionBoardsInput, {nullable:false})
    @Type(() => UserCreateWithoutBucketVisionBoardsInput)
    create!: UserCreateWithoutBucketVisionBoardsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
