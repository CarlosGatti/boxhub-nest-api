import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFeedbacksInput } from './user-update-without-feedbacks.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFeedbacksInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFeedbacksInput, {nullable:false})
    @Type(() => UserUpdateWithoutFeedbacksInput)
    data!: UserUpdateWithoutFeedbacksInput;
}
