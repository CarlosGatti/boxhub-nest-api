import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

import { Type } from 'class-transformer';

export class UpdateHoldingDto {
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  quantity?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  averageCost?: number;

  @IsString()
  @IsOptional()
  notes?: string;
}
