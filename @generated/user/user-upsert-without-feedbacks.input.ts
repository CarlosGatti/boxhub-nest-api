import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFeedbacksInput } from './user-update-without-feedbacks.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFeedbacksInput } from './user-create-without-feedbacks.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFeedbacksInput {

    @Field(() => UserUpdateWithoutFeedbacksInput, {nullable:false})
    @Type(() => UserUpdateWithoutFeedbacksInput)
    update!: UserUpdateWithoutFeedbacksInput;

    @Field(() => UserCreateWithoutFeedbacksInput, {nullable:false})
    @Type(() => UserCreateWithoutFeedbacksInput)
    create!: UserCreateWithoutFeedbacksInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
