import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';
import { ReviewCardLinkMode } from '@prisma/client';

export class CreateReviewCardProjectDto {
  @IsNumber()
  @Type(() => Number)
  businessId: number;

  @IsNumber()
  @Type(() => Number)
  templateId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(ReviewCardLinkMode)
  reviewLinkMode: ReviewCardLinkMode;

  @IsOptional()
  @IsUrl()
  googleReviewUrlFinal?: string;

  @IsOptional()
  designJson?: Record<string, unknown>;

  @IsOptional()
  assetsJson?: Record<string, unknown>;
}
