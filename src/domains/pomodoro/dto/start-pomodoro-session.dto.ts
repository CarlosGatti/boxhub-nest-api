import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import { PomodoroSessionMode } from '@generated/prisma/pomodoro-session-mode.enum';

@InputType()
export class StartPomodoroSessionDto {
  @Field(() => PomodoroSessionMode)
  @IsEnum(PomodoroSessionMode)
  mode: PomodoroSessionMode;

  @Field(() => Int)
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  durationMinutes: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  taskId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  projectId?: number;
}
