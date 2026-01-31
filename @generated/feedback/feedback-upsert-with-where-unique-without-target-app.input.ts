import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { Type } from 'class-transformer';
import { FeedbackUpdateWithoutTargetAppInput } from './feedback-update-without-target-app.input';
import { FeedbackCreateWithoutTargetAppInput } from './feedback-create-without-target-app.input';

@InputType()
export class FeedbackUpsertWithWhereUniqueWithoutTargetAppInput {

    @Field(() => FeedbackWhereUniqueInput, {nullable:false})
    @Type(() => FeedbackWhereUniqueInput)
    where!: Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>;

    @Field(() => FeedbackUpdateWithoutTargetAppInput, {nullable:false})
    @Type(() => FeedbackUpdateWithoutTargetAppInput)
    update!: FeedbackUpdateWithoutTargetAppInput;

    @Field(() => FeedbackCreateWithoutTargetAppInput, {nullable:false})
    @Type(() => FeedbackCreateWithoutTargetAppInput)
    create!: FeedbackCreateWithoutTargetAppInput;
}
