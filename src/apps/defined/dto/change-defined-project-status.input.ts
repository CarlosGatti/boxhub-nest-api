import { Field, InputType, Int } from '@nestjs/graphql';
import { DefinedProjectStatus } from '@generated/prisma/defined-project-status.enum';
import { IsEnum, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class ChangeDefinedProjectStatusInput {
  @Field(() => Int)
  @IsInt()
  @Type(() => Number)
  id: number;

  @Field(() => DefinedProjectStatus)
  @IsEnum(DefinedProjectStatus)
  status: DefinedProjectStatus;
}
