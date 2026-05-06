import { Field, InputType } from '@nestjs/graphql';
import { PomodoroSessionMode } from '@generated/prisma/pomodoro-session-mode.enum';
import { PomodoroSessionStatus } from '@generated/prisma/pomodoro-session-status.enum';
import { IsEnum, IsOptional } from 'class-validator';

@InputType()
export class PomodoroSessionsFilterInput {
  @Field(() => PomodoroSessionStatus, { nullable: true })
  @IsOptional()
  @IsEnum(PomodoroSessionStatus)
  status?: PomodoroSessionStatus;

  @Field(() => PomodoroSessionMode, { nullable: true })
  @IsOptional()
  @IsEnum(PomodoroSessionMode)
  mode?: PomodoroSessionMode;
}
