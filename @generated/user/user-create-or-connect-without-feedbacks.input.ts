import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFeedbacksInput } from './user-create-without-feedbacks.input';

@InputType()
export class UserCreateOrConnectWithoutFeedbacksInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutFeedbacksInput, {nullable:false})
    @Type(() => UserCreateWithoutFeedbacksInput)
    create!: UserCreateWithoutFeedbacksInput;
}
