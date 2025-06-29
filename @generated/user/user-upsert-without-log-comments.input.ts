import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutLogCommentsInput } from './user-update-without-log-comments.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutLogCommentsInput } from './user-create-without-log-comments.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutLogCommentsInput {

    @Field(() => UserUpdateWithoutLogCommentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutLogCommentsInput)
    update!: UserUpdateWithoutLogCommentsInput;

    @Field(() => UserCreateWithoutLogCommentsInput, {nullable:false})
    @Type(() => UserCreateWithoutLogCommentsInput)
    create!: UserCreateWithoutLogCommentsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
