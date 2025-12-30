import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

import { AssetType } from '@prisma/client';

export class CreateAssetDto {
  @IsEnum(AssetType)
  @IsNotEmpty()
  type: AssetType;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  ticker?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsString()
  @IsOptional()
  @MaxLength(3)
  currency?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  exchange?: string;

  @IsOptional()
  metadata?: Record<string, any>;
}
