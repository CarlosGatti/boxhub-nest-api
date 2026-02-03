import { Field, GraphQLISODateTime, ID, InputType, registerEnumType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export enum HomeOpsWeeklyPlanMode {
  OPEN_OR_CREATE = 'OPEN_OR_CREATE',
  ADD_MISSING = 'ADD_MISSING',
  RESET = 'RESET',
}

registerEnumType(HomeOpsWeeklyPlanMode, {
  name: 'HomeOpsWeeklyPlanMode',
});

@InputType()
export class GenerateHomeOpsWeeklyPlanInput {
  @Field(() => ID)
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => String(value))
  householdId: string;

  @Field(() => GraphQLISODateTime)
  weekStartDate: Date;

  @Field(() => HomeOpsWeeklyPlanMode, { nullable: true })
  @IsOptional()
  @IsEnum(HomeOpsWeeklyPlanMode)
  mode?: HomeOpsWeeklyPlanMode;
}
