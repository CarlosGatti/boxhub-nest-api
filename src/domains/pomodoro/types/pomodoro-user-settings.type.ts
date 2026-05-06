import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PomodoroUserSettingsType {
  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  focusMinutes: number;

  @Field(() => Int)
  shortBreakMinutes: number;

  @Field(() => Int)
  longBreakMinutes: number;

  @Field(() => Int)
  longBreakEvery: number;

  @Field(() => Boolean)
  autoStartBreaks: boolean;

  @Field(() => Boolean)
  autoStartFocus: boolean;

  @Field(() => String)
  timezone: string;

  @Field(() => Date)
  updatedAt: Date;
}
