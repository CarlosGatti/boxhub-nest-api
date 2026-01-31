import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFeedbacksInput } from './user-create-without-feedbacks.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFeedbacksInput } from './user-create-or-connect-without-feedbacks.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutFeedbacksInput {

    @Field(() => UserCreateWithoutFeedbacksInput, {nullable:true})
    @Type(() => UserCreateWithoutFeedbacksInput)
    create?: UserCreateWithoutFeedbacksInput;

    @Field(() => UserCreateOrConnectWithoutFeedbacksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFeedbacksInput)
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
