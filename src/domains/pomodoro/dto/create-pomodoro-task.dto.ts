import { Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { PomodoroTaskStatus } from '@generated/prisma/pomodoro-task-status.enum';

@InputType()
export class CreatePomodoroTaskDto {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => PomodoroTaskStatus, { nullable: true })
  @IsOptional()
  @IsEnum(PomodoroTaskStatus)
  status?: PomodoroTaskStatus;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  projectId?: number;
}
