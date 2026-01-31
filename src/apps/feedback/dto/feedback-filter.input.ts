import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';
import { FeedbackStatus } from '../../../../@generated/prisma/feedback-status.enum';

@InputType()
export class FeedbackFilterInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  targetAppCode?: string;

  @Field(() => FeedbackStatus, { nullable: true })
  @IsOptional()
  status?: FeedbackStatus;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  createdFrom?: Date;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  createdTo?: Date;
}
