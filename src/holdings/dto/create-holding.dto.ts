import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

import { Type } from 'class-transformer';

export class CreateHoldingDto {
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  assetId: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Type(() => Number)
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Type(() => Number)
  averageCost: number;

  @IsString()
  @IsOptional()
  notes?: string;
}
