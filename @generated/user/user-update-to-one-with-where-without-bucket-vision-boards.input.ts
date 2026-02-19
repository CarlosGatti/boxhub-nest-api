import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutBucketVisionBoardsInput } from './user-update-without-bucket-vision-boards.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutBucketVisionBoardsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutBucketVisionBoardsInput, {nullable:false})
    @Type(() => UserUpdateWithoutBucketVisionBoardsInput)
    data!: UserUpdateWithoutBucketVisionBoardsInput;
}
