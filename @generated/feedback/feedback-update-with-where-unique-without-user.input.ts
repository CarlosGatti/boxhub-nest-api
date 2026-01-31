import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { Type } from 'class-transformer';
import { FeedbackUpdateWithoutUserInput } from './feedback-update-without-user.input';

@InputType()
export class FeedbackUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => FeedbackWhereUniqueInput, {nullable:false})
    @Type(() => FeedbackWhereUniqueInput)
    where!: Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>;

    @Field(() => FeedbackUpdateWithoutUserInput, {nullable:false})
    @Type(() => FeedbackUpdateWithoutUserInput)
    data!: FeedbackUpdateWithoutUserInput;
}
