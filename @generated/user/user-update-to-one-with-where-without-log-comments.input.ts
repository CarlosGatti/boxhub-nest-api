import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutLogCommentsInput } from './user-update-without-log-comments.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutLogCommentsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutLogCommentsInput, {nullable:false})
    @Type(() => UserUpdateWithoutLogCommentsInput)
    data!: UserUpdateWithoutLogCommentsInput;
}
