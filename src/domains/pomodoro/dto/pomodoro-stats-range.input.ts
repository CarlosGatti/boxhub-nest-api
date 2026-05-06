import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsOptional, IsString } from 'class-validator';

@InputType()
export class PomodoroStatsRangeInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsDateString()
  from?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsDateString()
  to?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  timezone?: string;
}
