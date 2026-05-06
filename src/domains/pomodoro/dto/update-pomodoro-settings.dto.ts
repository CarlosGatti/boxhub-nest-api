import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

@InputType()
export class UpdatePomodoroSettingsDto {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(5)
  @Max(180)
  focusMinutes?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(60)
  shortBreakMinutes?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(5)
  @Max(90)
  longBreakMinutes?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Min(2)
  @Max(12)
  longBreakEvery?: number;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  autoStartBreaks?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  autoStartFocus?: boolean;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  timezone?: string;
}
