import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppCreateWithoutFeedbacksInput } from './app-create-without-feedbacks.input';
import { Type } from 'class-transformer';
import { AppCreateOrConnectWithoutFeedbacksInput } from './app-create-or-connect-without-feedbacks.input';
import { Prisma } from '@prisma/client';
import { AppWhereUniqueInput } from './app-where-unique.input';

@InputType()
export class AppCreateNestedOneWithoutFeedbacksInput {

    @Field(() => AppCreateWithoutFeedbacksInput, {nullable:true})
    @Type(() => AppCreateWithoutFeedbacksInput)
    create?: AppCreateWithoutFeedbacksInput;

    @Field(() => AppCreateOrConnectWithoutFeedbacksInput, {nullable:true})
    @Type(() => AppCreateOrConnectWithoutFeedbacksInput)
    connectOrCreate?: AppCreateOrConnectWithoutFeedbacksInput;

    @Field(() => AppWhereUniqueInput, {nullable:true})
    @Type(() => AppWhereUniqueInput)
    connect?: Prisma.AtLeast<AppWhereUniqueInput, 'id' | 'code'>;
}
