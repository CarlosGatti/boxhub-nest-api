import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeedbackWhereUniqueInput } from './feedback-where-unique.input';
import { Type } from 'class-transformer';
import { FeedbackCreateWithoutTargetAppInput } from './feedback-create-without-target-app.input';

@InputType()
export class FeedbackCreateOrConnectWithoutTargetAppInput {

    @Field(() => FeedbackWhereUniqueInput, {nullable:false})
    @Type(() => FeedbackWhereUniqueInput)
    where!: Prisma.AtLeast<FeedbackWhereUniqueInput, 'id'>;

    @Field(() => FeedbackCreateWithoutTargetAppInput, {nullable:false})
    @Type(() => FeedbackCreateWithoutTargetAppInput)
    create!: FeedbackCreateWithoutTargetAppInput;
}
