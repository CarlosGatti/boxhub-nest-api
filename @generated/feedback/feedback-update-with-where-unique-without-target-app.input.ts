import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { Type } from 'class-transformer';
import { FeedbackUpdateWithoutTargetAppInput } from './feedback-update-without-target-app.input';

@InputType()
export class FeedbackUpdateWithWhereUniqueWithoutTargetAppInput {

    @Field(() => FeedbackWhereUniqueInput, {nullable:false})
    @Type(() => FeedbackWhereUniqueInput)
    where!: Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>;

    @Field(() => FeedbackUpdateWithoutTargetAppInput, {nullable:false})
    @Type(() => FeedbackUpdateWithoutTargetAppInput)
    data!: FeedbackUpdateWithoutTargetAppInput;
}
