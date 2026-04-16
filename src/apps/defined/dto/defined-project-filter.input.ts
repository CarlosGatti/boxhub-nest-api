import { Field, InputType, Int } from '@nestjs/graphql';
import { DefinedProjectServiceType } from '@generated/prisma/defined-project-service-type.enum';
import { DefinedProjectStatus } from '@generated/prisma/defined-project-status.enum';
import { IsEnum, IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class DefinedProjectFilterInput {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  clientId?: number;

  @Field(() => DefinedProjectStatus, { nullable: true })
  @IsOptional()
  @IsEnum(DefinedProjectStatus)
  status?: DefinedProjectStatus;

  @Field(() => DefinedProjectServiceType, { nullable: true })
  @IsOptional()
  @IsEnum(DefinedProjectServiceType)
  serviceType?: DefinedProjectServiceType;
}
