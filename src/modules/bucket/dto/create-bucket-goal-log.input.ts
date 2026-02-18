import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateBucketGoalLogInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @MaxLength(10000)
  note: string;

  @Field(() => Date, { description: 'When the memory/event occurred (ISO string)' })
  @IsDateString()
  happenedAt: Date;
}
