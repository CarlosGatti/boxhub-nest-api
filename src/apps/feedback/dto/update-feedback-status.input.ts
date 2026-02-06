import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt } from 'class-validator';
import { FeedbackStatus } from '@generated/prisma/feedback-status.enum';

@InputType()
export class UpdateFeedbackStatusInput {
  @Field(() => Int)
  @IsInt()
  id: number;

  @Field(() => FeedbackStatus)
  status: FeedbackStatus;
}
