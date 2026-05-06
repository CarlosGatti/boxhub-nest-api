import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PomodoroStats {
  @Field(() => Int)
  totalCompletedSessions: number;

  @Field(() => Int)
  totalFocusMinutes: number;

  @Field(() => Int)
  completedSessionsToday: number;

  @Field(() => Int)
  focusMinutesToday: number;
}
