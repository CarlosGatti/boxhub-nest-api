import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppWhereUniqueInput } from './app-where-unique.input';
import { Type } from 'class-transformer';
import { AppCreateWithoutFeedbacksInput } from './app-create-without-feedbacks.input';

@InputType()
export class AppCreateOrConnectWithoutFeedbacksInput {

    @Field(() => AppWhereUniqueInput, {nullable:false})
    @Type(() => AppWhereUniqueInput)
    where!: Prisma.AtLeast<AppWhereUniqueInput, 'id' | 'code'>;

    @Field(() => AppCreateWithoutFeedbacksInput, {nullable:false})
    @Type(() => AppCreateWithoutFeedbacksInput)
    create!: AppCreateWithoutFeedbacksInput;
}
