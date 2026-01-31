import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutFeedbacksInput } from './user-create-without-feedbacks.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutFeedbacksInput } from './user-create-or-connect-without-feedbacks.input';
import { UserUpsertWithoutFeedbacksInput } from './user-upsert-without-feedbacks.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutFeedbacksInput } from './user-update-to-one-with-where-without-feedbacks.input';

@InputType()
export class UserUpdateOneWithoutFeedbacksNestedInput {

    @Field(() => UserCreateWithoutFeedbacksInput, {nullable:true})
    @Type(() => UserCreateWithoutFeedbacksInput)
    create?: UserCreateWithoutFeedbacksInput;

    @Field(() => UserCreateOrConnectWithoutFeedbacksInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutFeedbacksInput)
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksInput;

    @Field(() => UserUpsertWithoutFeedbacksInput, {nullable:true})
    @Type(() => UserUpsertWithoutFeedbacksInput)
    upsert?: UserUpsertWithoutFeedbacksInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutFeedbacksInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutFeedbacksInput)
    update?: UserUpdateToOneWithWhereWithoutFeedbacksInput;
}
